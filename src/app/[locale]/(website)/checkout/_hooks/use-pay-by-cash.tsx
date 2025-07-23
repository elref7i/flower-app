"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { payByCashAction } from "../_actions/pay-cash.action";
import { useTranslations } from "next-intl";

export default function usePayByCash() {
  // Translation
  const t = useTranslations();

  // mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (shippingAddressValues: ShippingAddress) =>
      await payByCashAction(shippingAddressValues),

    onSuccess: () => {
      toast.success("{t('message-on-cash')}");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const PayByCashHookFun = (values: ShippingAddress) => {
    mutate(values);
  };

  return { error, PayByCashHookFun, isPending };
}
