"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col min-h-[75vh] justify-center items-center gap-20">
      <h2 className="text-center text-red-500 flex flex-col gap-4">
        {error ? error.message : "Something went wrong"}
        <br />
      </h2>
      <Button
        variant={"default"}
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </Button>
    </main>
  );
}
