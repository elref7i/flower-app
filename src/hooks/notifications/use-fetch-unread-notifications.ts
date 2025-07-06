"use client";
import { useQuery } from "@tanstack/react-query";

export function useUnreadNotificationsCount() {
  const { data: payload } = useQuery({
    queryKey: ["UnreadNotifications"],
    queryFn: async () => {
      const respone = await fetch(`${process.env.NEXT_PUBLIC_API}/unread-notifications`);

      const payload: APIResponse<UnreadNotificationsReadResponse> = await respone.json();

      if ("error" in payload) {
        throw new Error(payload.error);
      }

      return payload;
    },
  });

  return { unreadCount: payload };
}
