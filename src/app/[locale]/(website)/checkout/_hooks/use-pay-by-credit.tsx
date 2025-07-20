"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { payByCreditAction } from "../_actions/pay-credit.action";
payByCreditAction;

export default function usePayByCredit() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (shippingAddressValues: ShippingAddress) =>
      await payByCreditAction(shippingAddressValues),

    onSuccess: (data) => {
      toast.success("Redirecting to payment...");

      const stripeUrl = data?.session?.url;

      if (stripeUrl) {
        window.location.href = stripeUrl;
      } else {
        toast.error("Stripe URL not found in response.");
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const PayByCreditHookFun = (values: ShippingAddress) => {
    mutate(values);
  };

  return { error, PayByCreditHookFun, isPending };
}
