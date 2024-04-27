import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const UserAvatar = async () => {
  return (
    <>
      <SignedOut>
        <Button asChild variant="ghost" size="sm" className="-py-1 ml-4 my-2">
          <SignInButton />
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};

export default UserAvatar;
