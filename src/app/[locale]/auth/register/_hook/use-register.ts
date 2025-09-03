import { TRegisterFormFields } from "@/lib/schema/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { registerAction } from "../_action/register.action";
import { toast } from "sonner";

export default function useRegister() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (registerInputs: TRegisterFormFields) => await registerAction(registerInputs),
    onSuccess() {
      toast.success("Acount Created Successfully");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  const registerHookFunc = (Inputs: TRegisterFormFields) => {
    mutate(Inputs);
  };

  return { error, isPending, registerHookFunc };
}
