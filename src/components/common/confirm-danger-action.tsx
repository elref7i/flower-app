import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { Trash, X } from "lucide-react";

interface ConfirmDangerActionProps {
  nameButton: string;
  message: string;
  discription: string;
  handleAction?: () => void;
}

export function ConfirmDangerAction({
  handleAction,
  nameButton,
  message,
  discription,
}: ConfirmDangerActionProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="link">{nameButton}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="*:text-center relative">
          <AlertDialogCancel asChild icon={true}>
            <X className="absolute end-0 top-0 cursor-pointer" />
          </AlertDialogCancel>
          <div
            className={cn(
              "relative bg-[#2E2E300D] flex items-center justify-center size-[105px] rounded-full",
              " before:bg-[#3b3b3d0d]  before:absolute before:top-1/2  before:start-1/2 before:size-[70px] before:-translate-x-1/2 before:-translate-y-1/2  before:rounded-full",
            )}
          >
            <Trash size={29} className="z-50" />
          </div>
          <AlertDialogTitle>{message}</AlertDialogTitle>
          <AlertDialogDescription>{discription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
