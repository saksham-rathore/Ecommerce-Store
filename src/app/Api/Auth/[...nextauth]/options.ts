import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbconnect";
import UserModel from "@/Model/User";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        identifier: { label: "Email or Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<"identifier" | "password", string> | undefined): Promise<User | null> {
        await dbConnect();
        try {
          if (!credentials) throw new Error("Credentials are required");
          const user = await UserModel.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          });
          if (!user) {
            throw new Error("No user found with this email");
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password,
          );

          if (isPasswordCorrect) {
            return {
              _id: user._id.toString(),
              email: user.email,
              username: user.Username,
              isAcceptingMessage: user.isAcceptingMessage,
            } as User;
          } else {
            throw new Error("Incorrect Password!");
          }
        } catch (err: unknown) {
          throw new Error(err instanceof Error ? err.message : String(err));
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user._id = token._id;
        session.user.isAcceptingMessage = token.isAcceptingMessage as
          | boolean
          | undefined;
        session.user.username = token.username;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.isAcceptingMessage = user.isAcceptingMessage;
        token.username = user.username;
      }
      return token;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH,
};
