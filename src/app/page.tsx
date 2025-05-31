<<<<<<< HEAD
"use client";
import { ModeToggle } from "@/components/common/theme-toggle";
import LoginDialog from "@/components/features/auth/auth-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import logOut from "@/lib/api/logout.api";
import { signOut, useSession } from "next-auth/react";

=======
>>>>>>> d5cbb212592b8952a661e741836ed00a23128b85
export default function Home() {
  const { data: session } = useSession();
  return (
<<<<<<< HEAD
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {session && session.user.lastName}
        <Button variant={"secondary"} className="">
          Refai
        </Button>
        <Input type="text" placeholder="Email" />
        <Textarea placeholder="input text" />
        <Label>Input</Label>
        <ModeToggle />
        <Badge variant={"subtle"}>Badge</Badge>
        <LoginDialog />

        <Button
          onClick={async () => {
            await signOut();
            logOut();
          }}
        >
          Logout
        </Button>
=======
    <div className="p-20">
      <main className="space-y-4">
        <h1 className="text-7xl font-bold text-center text-maroon-500 dark:text-softpink-500">
          Flower App
        </h1>
>>>>>>> d5cbb212592b8952a661e741836ed00a23128b85
      </main>
    </div>
  );
}
