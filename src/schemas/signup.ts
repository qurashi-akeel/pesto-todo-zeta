import { z } from "zod";

const usernameValidation = z
  .string()
  .min(5, { message: "Username should be atleast 5 characters" })
  .max(15, { message: "Username should not exceed 15 characters" })
  .regex(/^[a-zA-Z0-9_]*$/, {
    message: "Username can only contain letters, numbers and underscores",
  });

const signupSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password should be atleast 8 characters" })
    .max(20, { message: "Password should not exceed 20 characters" }),
});

export default signupSchema;
