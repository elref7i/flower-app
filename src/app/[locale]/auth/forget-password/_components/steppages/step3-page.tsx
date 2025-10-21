import React from "react";
import SetPasswordForm from "../forms/reset-pass-form";
import { useTranslations } from "next-intl";
import AuthFooter from "../../../_components/auth-footer";

export default function ResetPasswordPage() {
  const t = useTranslations();
  return (
    <div className="space-y-3">
      {/* reset password title  */}
      <h2 className="text-center font-semibold text-2xl text-zinc-800 dark:text-zinc-50">
        {t("forgetpassword.create-password")}
      </h2>
      <p className="text-center text-zinc-800 font-normal dark:text-zinc-50">
        {t("forgetpassword.set-strong-password")}
      </p>
      <hr className="  w-full" />

      <div>
        {/* set password form */}
        <SetPasswordForm />
        <hr className="w-full border-t mt-8" />
      </div>

      {/* Footer */}
      <AuthFooter page="code" />
    </div>
  );
}
