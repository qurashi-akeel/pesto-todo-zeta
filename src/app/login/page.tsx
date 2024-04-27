import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData, { redirectTo: "/" });
      }}
      className="flex flex-col gap-5 min-h-[75vh]"
    >
      <label className="mt-4">
        Email
        <Input name="email" type="email" />
      </label>
      <label className="mt-4">
        Password
        <Input name="password" type="password" />
      </label>
      <Button type="submit">Sign In</Button>
    </form>
  );
}
