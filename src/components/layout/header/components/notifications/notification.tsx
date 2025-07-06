"use client";
import { Bell, BrushCleaning, CheckCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import NotificationCard from "./notification-card";
import EmptyNotification from "./empty-notification";
import { useUnreadNotificationsCount } from "@/hooks/notifications/use-fetch-unread-notifications";
import { fetchUserNotification } from "@/lib/api/notifications.api";
import { useDeleteAllNotifications } from "@/hooks/notifications/use-delete-all-notifications";
import { useReadAllNotifications } from "@/hooks/notifications/use-read-all-notifications";
import { Button } from "@/components/ui/button";
import NotificationItemSkeleton from "../skeletons/notifications/notification-item.skeleton";

export default function Notification() {
  // Translations
  const t = useTranslations();

  // Queries
  const { unreadCount } = useUnreadNotificationsCount();
  const {
    data: payload,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["Notifications"],
    queryFn: async ({ pageParam }) => {
      return await fetchUserNotification({ pageParam });
    },
    initialPageParam: 1,
    getNextPageParam: (LastPage) => {
      if (LastPage.metadata.currentPage === LastPage.metadata.totalPages) return undefined;
      return LastPage.metadata.currentPage + 1;
    },
  });

  // Mutations
  const { deletePending, allNotificationsDelete } = useDeleteAllNotifications();
  const { readPending, readAllNotificationsMutate } = useReadAllNotifications();

  // Variables
  const notificationsFetched = payload?.pages?.flatMap((page: any) => page.notifications) ?? [];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative">
          <Bell className="cursor-pointer" />
          {/* UnRead Count */}
          {/* if count equal zero not display */}
          {(unreadCount?.unreadCount ?? 0) > 0 && (
            <span className="absolute bottom-3/4 right-0 flex size-[14px] items-center justify-center rounded-full bg-red-600 text-[10px] font-medium text-white dark:bg-red-500">
              {unreadCount?.unreadCount}
            </span>
          )}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="relative w-[336px] rounded-2xl border-0 p-0"
        id="notifications"
      >
        {/* Heading */}
        <DropdownMenuLabel className="flex h-[58px] items-center bg-maroon-700 p-4 text-xl font-bold text-white dark:bg-softpink-200 dark:text-zinc-800">
          {t("notifications")} ({unreadCount?.unreadCount ?? 0})
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
        {/* Actions */}
        <DropdownMenuGroup className="p-[10px] dark:bg-zinc-700">
          <div className="flex items-center justify-between">
            <div className="flex cursor-pointer items-center">
              {/* Clear All Notifications */}
              <Button
                variant="ghost"
                className="text-xs font-semibold dark:text-zinc-50"
                onClick={() => allNotificationsDelete()}
                disabled={deletePending || notificationsFetched.length === 0}
              >
                <BrushCleaning size={14} color="#71717A" />
                {t("clear-all-notifications")}
              </Button>
            </div>

            <div className="flex cursor-pointer items-center gap-[6px]">
              {/* Read All Notifications */}
              <Button
                className="text-xs font-semibold dark:text-zinc-50"
                variant="ghost"
                onClick={() => readAllNotificationsMutate()}
                disabled={
                  readPending || notificationsFetched.length === 0 || unreadCount?.unreadCount === 0
                }
              >
                <CheckCheck size={14} color="#71717A" />
                {t("mark-all-as-read")}
              </Button>
            </div>
          </div>
        </DropdownMenuGroup>

        <DropdownMenuGroup className="flex flex-col items-center justify-center p-0">
          {/* loading */}
          {isLoading ? (
            // Loading Skeleton
            <div>
              <NotificationItemSkeleton />
              <NotificationItemSkeleton />
              <NotificationItemSkeleton />
              <NotificationItemSkeleton />
            </div>
          ) : notificationsFetched.length === 0 ? (
            <EmptyNotification />
          ) : (
            // Fetching Next Page
            <InfiniteScroll
              next={fetchNextPage}
              scrollableTarget="notifications"
              hasMore={hasNextPage}
              loader={<NotificationItemSkeleton />}
              dataLength={notificationsFetched.length}
            >
              {notificationsFetched.map((notification: any) => (
                <NotificationCard key={notification.id} notifications={notification} />
              ))}
            </InfiniteScroll>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
