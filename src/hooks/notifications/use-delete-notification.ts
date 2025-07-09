"use client";
import { deleteNotification } from "@/lib/actions/notifications/delete-notification.action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeleteNotification(id: string) {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      return await deleteNotification(id);
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

  return { deletePending: isPending, deleteNOtificationMutate: mutate };
}
