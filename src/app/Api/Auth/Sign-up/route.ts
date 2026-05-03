import dbConnect from "@/lib/dbconnect";
import UserModel from "@/Model/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();

    const existingUserVerifiedByUsername = await UserModel.findOne({
      username,
    });

    if (existingUserVerifiedByUsername) {
      return Response.json(
        {
          success: false,
          message: "Username is Already taken",
        },
        { status: 400 },
      );
    }

    const existingUserbyemail = await UserModel.findOne({ email });

    if (existingUserbyemail) {
      return Response.json(
        {
          success: false,
          message: "User already exists with this email",
        },
        { status: 400 }
      );
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const expiryDate = new Date();

      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        isAcceptingMessage: true,
        messages: [],
      });

      await newUser.save()
    }

    return Response.json({
        success: true,
        message: "User registered successfully. Please verify your email"
    }, {status: 201})

  } catch (error) {
    console.error("Error registering user", error);
    return Response.json(
      {
        success: false,
        message: "Error registering User",
      },
      {
        status: 500,
      },
    );
  }
}
