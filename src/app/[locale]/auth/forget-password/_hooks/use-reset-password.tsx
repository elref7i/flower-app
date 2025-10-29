import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { TSetPasswordFieldsApI } from "@/lib/schema/auth.schema";

import { ResetPass } from "../_action/reset-pass-action";

export default function useResetPassword() {
  const handleSuccess = () => {
    toast.success("Password Updated success");
    setTimeout(() => {
      window.location.href = "/auth/login";
    }, 500);
  };
  const handleError = (error: Error) => {
    console.log("refai");

    toast.error(error.message);
    console.log(error.message);
  };

  const { isPending, error, mutate } = useMutation({
    mutationFn: async (ResetPasswordInputs: TSetPasswordFieldsApI) =>
      await ResetPass(ResetPasswordInputs),
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const ResetPasswordHookFun = (Inputs: TSetPasswordFieldsApI) => {
    mutate(Inputs);
  };
  return { error, ResetPasswordHookFun, isPending };
}
