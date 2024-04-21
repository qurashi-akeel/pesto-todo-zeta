import { z } from "zod";

const signinSchema = z.object({
  identifier: z.string(),
  password: z
    .string()
    .min(8, { message: "Password should be atleast 8 characters" })
    .max(20, { message: "Password should not exceed 20 characters" }),
});

export default signinSchema;
