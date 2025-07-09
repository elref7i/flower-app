import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function NotificationItemSkeleton() {
  return (
    <div className="flex w-full flex-col space-y-2 p-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-[10px] w-[200px] rounded-xl" />
        <div className="flex flex-col space-y-1">
          <Skeleton className="h-[2px] w-[3px] rounded-full" />
          <Skeleton className="h-[2px] w-[3px] rounded-full" />
          <Skeleton className="h-[2px] w-[3px] rounded-full" />
        </div>
      </div>

      <Skeleton className="h-[40px] w-[240px] rounded-xl" />
    </div>
  );
}
