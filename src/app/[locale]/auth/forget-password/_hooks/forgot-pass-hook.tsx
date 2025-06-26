import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { TForgotPasswordFormFields } from "@/lib/schema/auth.schema";
import { ForgetPass } from "../_action/forgot-pass-action";

export default function useForgetPassword() {
  const handleSuccess = () => {
    toast.success("Email send success");
     setTimeout(() => {
      window.location.href = "/auth/reset-password";
    }, 1000);
  };
  const handleError = (error: Error) => {
    toast.error(error.message);
    console.log(error.message);
  };

  const { isPending, error, mutate } = useMutation({
    mutationFn: async (ForgetPassInputs: TForgotPasswordFormFields) =>
      await ForgetPass(ForgetPassInputs),
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const ForgetPasswordHookFun = (Inputs: TForgotPasswordFormFields) => {
    mutate(Inputs);
  };
  return { error, ForgetPasswordHookFun, isPending };
}