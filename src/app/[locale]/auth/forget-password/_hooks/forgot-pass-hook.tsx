import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { TForgotPasswordFormFields } from "@/lib/schema/auth.schema";
import { ForgetPass } from "../_action/forgot-pass-action";

export default function useForgetPassword() {

  // handle success
  const handleSuccess = () => {
    toast.success("Email send success");
     setTimeout(() => {
      window.location.href = "/auth/reset-password";
    }, 1000);
  };

  // handle error
  const handleError = (error: Error) => {
    toast.error(error.message);
    console.log(error.message);
  };

  // use mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (ForgetPassInputs: TForgotPasswordFormFields) =>
    await ForgetPass(ForgetPassInputs),
    onSuccess: handleSuccess,
    onError: handleError,
  });


  const ForgetPasswordHookFun = (Inputs: TForgotPasswordFormFields) => {
    mutate(Inputs);
  };

  // return use query variables
  return { error, ForgetPasswordHookFun, isPending };
}