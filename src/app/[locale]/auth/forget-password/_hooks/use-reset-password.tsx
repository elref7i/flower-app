import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { TSetPasswordFields, TSetPasswordFieldsApI } from "@/lib/schema/auth.schema";

import { ResetPass } from "../_action/reset-pass-action";
import { useAuthContext } from "@/lib/context/auth-context";

export default function useResetPassword() {
  const { step, setStep, email, setEmail } = useAuthContext();
  const handleSuccess = () => {
    toast.success("Password Updated success");
    setStep("4");
    //  setTimeout(() => {
    //   window.location.href = "/auth/login";
    // }, 1000);
  };
  const handleError = (error: Error) => {
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
