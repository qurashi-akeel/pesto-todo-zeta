import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verificationCode: string
): Promise<ApiResponse> {
  try {
    const sentEmail = await resend.emails.send({
      to: email,
      from: process.env.RESEND_FROM_EMAIL!,
      subject: "Pesto Todo Zeta - Verify your account",
      html: `Thank you ${username} for signing up on Pesto Todo Zeta. Use ${verificationCode} to verify your account.`,
    });
    return {
      status: sentEmail.error ? 400 : 200,
      message: sentEmail.data?.id && "Verfication email sent successfully",
      error: sentEmail.error?.message,
    };
  } catch (error) {
    console.log("Error sending verification email: ", error);
    return {
      status: 500,
      message: "Error sending verification email",
      error: error,
    };
  }
}
