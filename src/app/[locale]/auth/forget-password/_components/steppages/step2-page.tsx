import React from "react";
import VerifyCodeForm from "../forms/otp-form";
import { useTranslations } from "next-intl";
import AuthFooter from "../../../_components/auth-footer";

export default function OtpPage() {
  const t = useTranslations();
  return (
    <div className="my-10">
      <VerifyCodeForm />

      {/* Footer */}
      <AuthFooter page="code" />
    </div>
  );
}
