import { useMutation } from "@tanstack/react-query";
import { changePassword } from "../_actions/profile.action";
import { ChangePasswordFields } from "@/lib/schema/profile.schema";
import { toast } from "sonner";

export function useChangePassword() {
  const {
    mutateAsync: changePasswordMutation,
    data: payload,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (values: ChangePasswordFields) => await changePassword(values),
    onSuccess: (data) => {
      toast.success(data.message || "Password changed successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { changePasswordMutation, isPending, isSuccess };
}
