import { useRouter } from "@/i18n/navigation";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { deleteCategoryAction } from "../_actions/delete-category";
import { toast } from "sonner";

export function useDeleteCategory() {
  // Translation
  const t = useTranslations();
  // Routing
  const router = useRouter();

  const {} = useMutation({
    mutationFn: async () => await deleteCategoryAction(),
    onSuccess: (data) => {
      toast.success("{t('deleted-category')}");
      router.push("/categories");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
