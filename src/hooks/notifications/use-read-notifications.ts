"use client";
import { readNotification } from "@/lib/actions/notifications/read-notification.action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useReadNotification({ id }: { id: string }) {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      return await readNotification({ id });
    },
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["UnreadNotifications"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { readPending: isPending, readNotificationMytate: mutate };
}
