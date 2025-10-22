import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { TVerifyCodeFields } from "@/lib/schema/auth.schema";
import { useAuthContext } from "@/lib/context/auth-context";
import { verifyOTPCodeAction } from "../_action/otp-action";

export default function useVerifyOtp() {
  const { setStep } = useAuthContext();

  // mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (verifyOTPcodeField: TVerifyCodeFields) =>
      await verifyOTPCodeAction(verifyOTPcodeField),

    onSuccess: (_data, variables) => {
      toast.success("Code Verified Successfully");
      setStep("3");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const VerifyOtpHookFun = (Inputs: TVerifyCodeFields) => {
    mutate(Inputs);
  };

  return { error, VerifyOtpHookFun, isPending };
}
