import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { TForgotPasswordFormFields } from "@/lib/schema/auth.schema";
import { forgetPassword } from "../_action/forgot-password-action";
import { useAuthContext } from "@/lib/context/auth-context";

export default function useForgetPassword() {
  const { setStep, setEmail } = useAuthContext();

  // mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (ForgetPassInputs: TForgotPasswordFormFields) =>
      await forgetPassword(ForgetPassInputs),

    onSuccess: (_data, variables) => {
      toast.success("Email sent successfully");
      setEmail(variables.email);
      setStep("2");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const ForgetPasswordHookFun = (Inputs: TForgotPasswordFormFields) => {
    mutate(Inputs);
  };

  return { error, ForgetPasswordHookFun, isPending };
}
