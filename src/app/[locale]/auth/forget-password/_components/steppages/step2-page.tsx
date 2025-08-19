import React from "react";
import VerifyCodeForm from "../forms/otp-form";
import { useTranslations } from "next-intl";

export default function OtpPage() {
  const t = useTranslations();
  return (
    <div className="my-10">
      <VerifyCodeForm />

      {/* Contact us */}
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
