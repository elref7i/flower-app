import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { TForgotPasswordFormFields } from "@/lib/schema/auth.schema";
import { ForgetPass } from "../_action/forgot-pass-action";
import { useAuthContext } from "@/lib/context/auth-context";

export default function useForgetPassword() {
  const { step, setStep, email, setEmail } = useAuthContext();

  // mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (ForgetPassInputs: TForgotPasswordFormFields) =>
      await ForgetPass(ForgetPassInputs),

    onSuccess: (_data, variables) => {
    
      toast.success("Email sent successfully");
      setEmail(variables.email);      
      setStep('2');      
      console.log(email,"email");
      console.log(step,"step")        
    },

    onError: (error: Error) => {
      toast.error(error.message);
      console.log(error.message);
    },
  });

  const ForgetPasswordHookFun = (Inputs: TForgotPasswordFormFields) => {
    mutate(Inputs);
  };

  return { error, ForgetPasswordHookFun, isPending };
}
