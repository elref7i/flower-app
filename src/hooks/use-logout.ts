import logOut from "@/lib/api/logout.api";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

export default function useLogout() {
  const { mutate: logOutMutation, isPending } = useMutation({
    mutationFn: async () => await logOut(),
    onSuccess: (data) => {
      signOut({ callbackUrl: "/" });
      toast.success(data.message || "logout succesfully");
    },
    onError: (error) => {
      toast.error(error.message || "logout Failed");
    },
  });

  return { logOutMutation, isPending };
}
