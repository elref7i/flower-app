import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { RegistrationFields } from "@/lib/schema/auth/register.schema";
import { registerAction } from "../_actions/register.action";
import { useRouter } from "@/i18n/navigation";

export default function useRegister() {
  // Navigation
  const router = useRouter();
  const searchParams = useSearchParams();

  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: RegistrationFields) => await registerAction(fields),
    onSuccess: () => {
      // Redirect to the login page upon successful registration
      router.push(`/auth/login?${searchParams.toString()}`);
    },
  });

  return { isPending, error, register: mutate };
}
