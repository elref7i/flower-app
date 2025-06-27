import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import ForgetPasswordForm from "../forms/forget-password-form";
import { useTranslations } from "next-intl";
import { useAuthContext } from "@/lib/context/auth-context";

export default function ForgetPassword() {
  //    const { step, setStep, email, setEmail } = useAuthContext();

  // use translations
  const t = useTranslations();
  return (
    <div className="space-y-3 m-20  w-[406px] ">
      {/* forget password form title */}
      <h2 className="font-semibold text-2xl text-zinc-800 dark:text-zinc-50">
        {t("forgetpassword.forget-password")}
      </h2>
      <p className="text-zinc-800 font-normal dark:text-zinc-50">
        {t("forgetpassword.forget-password-note")}
      </p>
      <hr className="  w-full" />

      <div>
        {/* forget password form */}
        <ForgetPasswordForm />

        <hr className="w-full border-t  mt-10" />
      </div>

      {/* Dont have account section */}
      <p className="text-zinc-800 font-medium dark:text-zinc-50 text-center">
        {t("forgetpassword.forgot-pass-have-no-account")}
        {t.rich("forgetpassword.forgot-pass-create-account", {
          span: (value) => (
            <span className="text-maroon-700 font-medium dark:text-softpink-300"> {value}</span>
          ),
        })}
      </p>
    </div>
  );
}
