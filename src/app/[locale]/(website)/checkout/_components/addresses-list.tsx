"use client";

import { useCheckout } from "@/lib/context/checkout-context";
import { MoveRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

type Props = {
  addresses: Address[];
};

export default function AddressesList({ addresses }: Props) {
  // hooks
  const { setStep, selectedAddress, setSelectedAddress } = useCheckout();

  // translation
  const t = useTranslations();

  const handleSelectAddress = (address: Address) => {
    setSelectedAddress(address);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold my-6 ms-1">{t("shipping-address")}</h1>

      <ul className="mt-4 space-y-3">
        {addresses.map((address) => (
          <li
            key={address._id}
            onClick={() => handleSelectAddress(address)}
            className={`p-2 border rounded-xl py-3 px-3 cursor-pointer transition-colors duration-200 ${
              selectedAddress?._id === address._id ? "bg-maroon-600 text-white" : "bg-white"
            }`}
          >
            <div className="flex justify-between mb-2 ms-1 items-center">
              <h3 className="font-semibold text-2xl text-inherit">{address.city}</h3>
              <div className="flex items-center gap-2 text-lg font-medium">
                <div
                  className={` rounded-full p-2 ${
                    selectedAddress?._id === address._id ? "bg-zinc-50" : "bg-maroon-600"
                  }`}
                >
                  <Phone
                    className={` w-4 h-4 ${
                      selectedAddress?._id === address._id ? "text-maroon-600" : "text-zinc-50"
                    }`}
                  />
                </div>
                +2{address.phone}
              </div>
            </div>

            <p
              className={`py-1 px-3 font-medium inline rounded-full ${
                selectedAddress?._id === address._id
                  ? "bg-zinc-800 text-zinc-50"
                  : "bg-zinc-100 text-zinc-800"
              }`}
            >
              {address.street}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center my-5 w-full">
        <div className="flex items-center w-full  px-4">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="px-4 text-sm text-gray-300 font-semibold">OR</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>
      </div>

      <Button className="bg-maroon-50 text-maroon-600 font-medium w-full rounded-lg  hover:text-maroon-50">
        {t("add-address-button")}
      </Button>

      <hr />

      <div className="flex justify-end">
        <Button
          className="bg-maroon-600 my-5 text-white font-semibold text-sm w-[152px]"
          onClick={() => {
            setStep("2");
          }}
          disabled={!selectedAddress}
        >
          {t("next-button")}
          <MoveRight />
        </Button>
      </div>
    </div>
  );
}
