import { ModeToggle } from "@/components/common/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button variant={"secondary"} className="">
          Refai
        </Button>
        <Input type="text" placeholder="Email" />
        <Textarea placeholder="input text" />
        <Label>Input</Label>
        <ModeToggle />
        <Badge variant={"subtle"}>Badge</Badge>
      </main>
    </div>
  );
}
