"use client";

import { useDeleteAcount } from "@/app/[locale]/(website)/profile/_hooks/use-profile";
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
  description: string;
}

// ConfirmDangerAction
export function ConfirmDangerAction({
  nameButton,
  message,
  description,
}: ConfirmDangerActionProps) {
  // Mutation
  const { deleteAcountMutation, isPending } = useDeleteAcount();

  return (
    <AlertDialog>
      {/* Trigger */}
      <AlertDialogTrigger asChild>
        {/* Button */}
        <Button variant={"link"} className="text-maroon-500 no-underline hover:no-underline">
          {nameButton}
        </Button>
      </AlertDialogTrigger>

      {/* Content */}
      <AlertDialogContent className="bg-white dark:bg-zinc-900 border-maroon-500">
        {/* Header */}
        <AlertDialogHeader className="*:text-center relative ">
          {/* Cancel */}
          <AlertDialogCancel asChild icon={true}>
            <X className="absolute end-0 top-0 cursor-pointer dark:text-red-500  " />
          </AlertDialogCancel>

          {/* Icon */}
          <div
            className={cn(
              "relative bg-[#2E2E300D] dark:bg-[#fbacac16] flex items-center justify-center size-[105px] rounded-full",
              " before:bg-[#3b3b3d0d]  before:dark:bg-[#f98c8c42]  before:absolute before:top-1/2  before:start-1/2 before:size-[70px] before:-translate-x-1/2 before:-translate-y-1/2  before:rounded-full",
            )}
          >
            <Trash size={29} className="z-50 dark:text-maroon-500" />
          </div>

          {/* Title */}
          <AlertDialogTitle>{message}</AlertDialogTitle>

          {/* Description */}
          <AlertDialogDescription className="text-maroon-500">{description}</AlertDialogDescription>
        </AlertDialogHeader>

        {/* Footer */}
        <AlertDialogFooter>
          {/* Cancel */}
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          {/* Continue */}
          <AlertDialogAction asChild>
            <Button disabled={isPending} onClick={() => deleteAcountMutation()}>
              Continue
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
