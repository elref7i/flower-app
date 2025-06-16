import { useMutation } from "@tanstack/react-query";
import { TRegisterFormFields } from "@/lib/schema/auth.schema";
import registerAction from "../action/register.action";

// Hook to handle Register mutation
export default function useRegister() {
  // Hook Register mutation

  const { isPending, error, mutateAsync } = useMutation({
    mutationKey: ["register"],
    mutationFn: (values: TRegisterFormFields) => registerAction(values),
  });

  return { isPending, error, registerNewAccount: mutateAsync };
}
