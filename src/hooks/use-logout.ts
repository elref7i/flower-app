import { LogOutResponse } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

export default function useLogout() {
  const { mutate: logOutMutation, isPending } = useMutation({
    mutationFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API!}/logout`);
      const payload: LogOutResponse = await response.json();

      if ("error" in payload) throw new Error(payload.error || "Can't Log Out");

      return payload;
    },

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
