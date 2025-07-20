"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { payByCashAction } from "../_actions/pay-cash.action";

export default function usePayByCash() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (shippingAddressValues: ShippingAddress) =>
      await payByCashAction(shippingAddressValues),

    onSuccess: () => {
      toast.success("mission done");
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
