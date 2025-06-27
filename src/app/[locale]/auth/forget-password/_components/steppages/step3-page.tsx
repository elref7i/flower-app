import React from "react";
import SetPasswordForm from "../forms/reset-pass-form";
import { useTranslations } from "next-intl";

export default function ResetPasswordPage() {
  const t = useTranslations();
  return (
    <div className="space-y-3 m-24  w-[406px]">
      {/* reset password title  */}
      <h2 className="font-semibold text-2xl text-zinc-800 dark:text-zinc-50">
        {t("forgetpassword.create-password")}
      </h2>
      <p className="text-zinc-800 font-normal dark:text-zinc-50">
        {t("forgetpassword.set-strong-password")}
      </p>
      <hr className="  w-full" />

      <div>
        {/* set password form */}
        <SetPasswordForm />
        <hr className="  w-full  border-t mt-8" />
      </div>

      {/* section of need help and contact us  */}
      <div>
        <p className=" mt-8 text-zinc-800 font-medium dark:text-zinc-50 text-center">
          {t("forgetpassword.need-help")}
          {t.rich("forgetpassword.contact-us", {
            span: (value) => (
              <span className="text-maroon-700 font-medium dark:text-softpink-300"> {value}</span>
            ),
          })}
        </p>
      </div>
    </div>
  );
}
