"use client";

import LoginDialog from "@/components/features/auth/auth-dialog";
import { Button } from "@/components/ui/button";
import logOut from "@/lib/api/logout.api";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {session && session.user.lastName}
        <h1 className="text-7xl font-bold text-center text-maroon-500 dark:text-softpink-500">
          Flower App
        </h1>

        <LoginDialog />

        <Button
          onClick={async () => {
            await signOut();
            logOut();
          }}
        >
          Logout
        </Button>
      </main>
    </div>
  );
}

// feat/authentication:first commit
