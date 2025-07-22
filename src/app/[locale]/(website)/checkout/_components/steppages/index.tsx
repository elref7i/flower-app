"use client";
import PaymentMethodPage from "./step2-page";
import ShippingAddressPage from "./step1-page";
import { useCheckout } from "@/lib/context/checkout-context";
import ProgressBar from "@/components/common/progress-bar";

type Props = {
  addresses: Address[];
};

export default function RenderSteps({ addresses }: Props) {
  const { step } = useCheckout();

  const renderStep = () => {
    switch (step) {
      case "1":
        return <ShippingAddressPage addresses={addresses} />;
      case "2":
        return <PaymentMethodPage />;
      default:
        return <p>Not found</p>;
    }
  };

  return (
    <div className="w-[782px]  px-5">
      <ProgressBar step={step} />
      {renderStep()}
    </div>
  );
}
