import dbConnect from "@/lib/dbConnect";
import { User } from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(req: Request, res: Response) {
  await dbConnect();

  try {
    const { username, password, email } = await req.json();

    const existingVerifiedUsername = await User.findOne({
      username,
      isVerified: true,
    });

    if (existingVerifiedUsername) {
      return Response.json({
        status: 400,
        message: "User already exists - username taken",
      });
    }
    const existingUserEmail = await User.findOne({ email });
    if (existingUserEmail) {
      if (existingUserEmail.isVerified) {
        return Response.json({
          status: 400,
          message: "User already exists - email registered",
        });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        existingUserEmail.password = hashedPassword;
        existingUserEmail.verifyCode = Math.floor(
          100000 + Math.random() * 900000
        ).toString();
        existingUserEmail.verifyCodeExpiry = new Date(
          Date.now() + 1000 * 60 * 60 * 24
        );
        await existingUserEmail.save();

        return Response.json({
          status: 400,
          message: "User already exists - email not verified",
        });
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const verifyCodeExpiry = new Date();
      verifyCodeExpiry.setHours(verifyCodeExpiry.getHours() + 24);
      const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

      const user = await User.create({
        username,
        email,
        password: hashedPassword,
        verifyCode,
        verifyCodeExpiry,
      });

      if (user) {
        await sendVerificationEmail(email, username, user.verifyCode);
        return Response.json({
          status: 201,
          message: "User created",
        });
      } else {
        return Response.json({
          status: 500,
          message: "Error creating user",
        });
      }
    }
  } catch (error) {
    console.log("Error creating user: ", error);
    return Response.json({
      status: 500,
      message: "Error creating user",
    });
  }
}
