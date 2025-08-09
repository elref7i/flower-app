"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type CheckoutContextType = {
  step: string;
  setStep: (step: string) => void;
  selectedAddress: Address | null;
  setSelectedAddress: (address: Address) => void;
};

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState("1");

  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  return (
    <CheckoutContext.Provider value={{ step, setStep, selectedAddress, setSelectedAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
}
