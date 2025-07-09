import React from "react";
import { Check, EllipsisVertical, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils/cn";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useReadNotification } from "@/hooks/notifications/use-read-notifications";
import { useDeleteNotification } from "@/hooks/notifications/use-delete-notification";

export default function NotificationCard({ notification }: any) {
  const t = useTranslations();
  // Mutation
  //todo:when know notification return
  const { readNotificationMytate, readPending } = useReadNotification(notification.id);
  const { deleteNOtificationMutate, deletePending } = useDeleteNotification(notification.id);
  return (
    <div
      className={cn(
        "flex flex-col gap-[6px] border-t p-4",
        notification.isRead ? "bg-zinc-200 dark:bg-zinc-600" : "bg-none",
      )}
    >
      <div className="flex items-center justify-between">
        {/* Notification Title */}
        <span className="text-base font-semibold text-zinc-800 dark:text-zinc-50">
          {notification.title}
        </span>
        {/* Menu*/}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
            <EllipsisVertical size={18} color="#71717A" />
            <span className="sr-only">Toggle menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="shadow-[0 4px 9px 0 #00000040] rounded-xl border-0 p-3 dark:bg-zinc-700"
          >
            <DropdownMenuItem className="flex cursor-pointer gap-2 py-1">
              {/* Read Notification */}
              <Button
                variant="ghost"
                className="text-sm dark:text-zinc-50"
                onClick={() => {
                  readNotificationMytate();
                }}
                disabled={readPending}
              >
                <Check color="#71717A" />
                {t("marks-as-read")}
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex cursor-pointer gap-2 py-1">
              {/* Delete Notification */}
              <Button
                variant="ghost"
                className="text-sm dark:text-zinc-50"
                onClick={() => {
                  deleteNOtificationMutate();
                }}
                disabled={deletePending}
              >
                <Trash2 color="#DC2626" />
                {t("delete-notification")}
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Notification Description */}
      <p className="line-clamp-3 text-sm font-normal text-zinc-500 dark:text-zinc-400">
        {notification.description}
      </p>
    </div>
  );
}
