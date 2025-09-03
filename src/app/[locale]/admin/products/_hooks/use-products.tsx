import { useTranslations } from "next-intl";
import { deleteProduct } from "../_actions/products.action";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

export function useDeleteProduct() {
  const t = useTranslations();

  const {
    mutate: deleteProductMutation,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (id: string) => await deleteProduct(id),
    onSuccess: (_) => toast.success(t("success-deleted-this-product")),
    onError: (error) => toast.error(error.message),
  });

  return { deleteProductMutation, isPending, isSuccess };
}
