import { authProvider } from "@/utility/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authProvider);// Create a handler

export {handler as GET, handler as POST}