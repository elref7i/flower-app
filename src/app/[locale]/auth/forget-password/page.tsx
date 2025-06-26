'use client';

import React from "react";

import { useAuthContext } from "@/lib/context/auth-context";
import { useTranslations } from "next-intl";
import ForgetPassword from "./_components/step1-page";
import ResetPasswordPage from "./_components/step3-page";
import OtpPage from "./_components/step2-page";

export default function page() {
  const { step } = useAuthContext();
  const t = useTranslations();

  const renderStep = () => {
    switch (step) {
      case '1':
        return <ForgetPassword/> ;
      case '2':
        return <OtpPage />;
      case '3':
        return <ResetPasswordPage/>;
      default:
        return <p>Not found</p>; // optional fallback
    }
  };

  return (
    <div className="">
      {renderStep()}
    </div>
  );
}
