"use client";
import { useAuthContext } from "@/lib/context/auth-context";
import React from "react";
import ForgetPassword from "./step1-page";
import OtpPage from "./step2-page";
import ResetPasswordPage from "./step3-page";
import AuthHeader from "../../../_components/auth-header";
import AuthFooter from "../../../_components/auth-footer";

export default function RenderSteps() {
  // Hooks
  const { step } = useAuthContext();

  // Functions
  const renderStep = () => {
    switch (step) {
      case "1":
        return <ForgetPassword />;
      case "2":
        return <OtpPage />;
      case "3":
        return <ResetPasswordPage />;
      default:
        return null;
    }
  };
  return (
    <div className="w-full max-w-[450px] mx-auto px-5">
      {/* Auth header component */}
      <AuthHeader page="forget-password" />

      {/* Login Form */}
      {renderStep()}
    </div>
  );
}
