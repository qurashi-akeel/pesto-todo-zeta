import { z } from "zod";

const verifyCodeSchema = z.object({
  verifyCode: z
    .string()
    .length(6, { message: "Verification code must be 6 characters long" }),
});

export default verifyCodeSchema;
