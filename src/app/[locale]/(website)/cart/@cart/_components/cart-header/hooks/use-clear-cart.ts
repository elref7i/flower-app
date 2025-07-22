import { clearCartItems } from "@/lib/actions/clear-cart.action";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useClearCart() {
  const t = useTranslations();

  // Clear Cart mutation
  const { isPending, mutate } = useMutation({
    mutationKey: ["clear-cart"],
    mutationFn: async () => {
      const response = await clearCartItems();
      if (response.message !== "success")
        throw new Error(response.message || "Can't Delete Cart Items");
      return response;
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success(t("cart.clear-cart-success"));
    },

    onError: (error) => {
      toast.dismiss();
      toast.error(error.message || "Fail to Delete Cart Items");
    },
  });

  useEffect(() => {
    if (isPending) toast.loading("Please Waite...");
  }, [isPending]);

  return { isPending, mutate };
}
