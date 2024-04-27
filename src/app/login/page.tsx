import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-between min-h-[75vh] py-4">
      <SignIn routing="hash" />
    </div>
  );
}
