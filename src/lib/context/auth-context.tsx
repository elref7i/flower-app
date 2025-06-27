"use client";

import { createContext, useContext, useState } from "react";

// create context
const AuthContext = createContext<AuthContext | null>(null);

// create context-provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState("1");
  const [email, setEmail] = useState("emanelkaser@gmail.com");

  return (
    // send email and step to children
    <AuthContext.Provider value={{ step, setStep, email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

// Handle Error
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContetx should be use within AuthProvider");
  }
  return context;
};
