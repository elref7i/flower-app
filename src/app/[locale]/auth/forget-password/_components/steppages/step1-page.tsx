import React from "react";
import ForgetPasswordForm from "../forms/forget-password-form";
import { useTranslations } from "next-intl";
import AuthFooter from "../../../_components/auth-footer";

export default function ForgetPassword() {
  // Translations
  const t = useTranslations();

  return (
    <div className="space-y-3 w-[406px]">
      {/* forget password form title */}
      <h2 className="font-semibold text-2xl text-zinc-800 dark:text-zinc-50">
        {t("forgetpassword.forget-password")}
      </h2>
      <p className="text-zinc-800 font-normal dark:text-zinc-50">
        {t("forgetpassword.forget-password-note")}
      </p>
      <hr className="w-full" />

      {/* forget password form */}
      <ForgetPasswordForm />

      {/* Footer */}
      <AuthFooter page="forget-password" />
    </div>
  );
}
