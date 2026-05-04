import nextAuth from "next-auth";
import {DefaultSession} from 'next-auth';

declare module "next-auth" {
  interface User {
    _id?: string;
    isAcceptingMessage?: boolean;
    username?: string;
  }
  interface Session {
    user: {
      _id?: string;
      isAcceptingMessage?: boolean;
      username?: string;
    } & DefaultSession['user']
  }
}


declare module "next-auth" {
    interface jwt{
      _id?: string;
      isAcceptingMessage?: boolean;
      username?: string;
    }
}