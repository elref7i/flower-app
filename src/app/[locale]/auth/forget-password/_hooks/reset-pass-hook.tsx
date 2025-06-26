import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { TSetPasswordFields } from "@/lib/schema/auth.schema";

import { ResetPass } from "../_action/reset-pass-action";

export default function useResetPassword() {
  const handleSuccess = () => {
    toast.success("Password Updated success");
     setTimeout(() => {
      window.location.href = "/auth/login";
    }, 1000);
  };
  const handleError = (error: Error) => {
    toast.error(error.message);
    console.log(error.message);
  };

  const { isPending, error, mutate } = useMutation({
    mutationFn: async (ResetPasswordInputs: TSetPasswordFields) =>
      await ResetPass(ResetPasswordInputs),
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const ResetPasswordHookFun = (Inputs: TSetPasswordFields) => {
    mutate(Inputs);
  };
  return { error, ResetPasswordHookFun, isPending };
}