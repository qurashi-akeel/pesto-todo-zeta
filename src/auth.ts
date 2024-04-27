import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import { User } from "./model/User";
import bcrypt from "bcryptjs";
import { signInSchema } from "./lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          if (!email || !password) {
            throw new Error("Email or password missing");
          }

          await dbConnect();
          // Check if user exists
          user = await User.findOne({ email: email });

          if (!user) {
            throw new Error("No user found with that email.");
          }

          // Verify password
          if (!(await bcrypt.compare(String(password), user.password))) {
            throw new Error("Incorrect password.");
          }

          // return user object with the their profile data ✓
          return user;
        } catch (error: any) {
          throw new Error(error.message || "Authentication failed");
        }
      },
    }),
  ],
});
