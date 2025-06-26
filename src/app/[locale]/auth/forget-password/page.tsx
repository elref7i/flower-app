import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import ForgetPasswordForm from "./_components/forget-password-form";
import { useTranslations } from "next-intl";

export default function ForgetPassword() {
  const t = useTranslations();
  return (
    <div className="space-y-3 m-20  w-[406px] ">
      <h2 className="font-semibold text-2xl text-zinc-800 dark:text-zinc-50">
        {t('forget-password')}

      </h2>
      <p className="text-zinc-800 font-normal dark:text-zinc-50">
        {t('forget-password-note')}
      </p>
      <hr className="  w-full" />

      <div>
        <ForgetPasswordForm />
        {/* <div className="h-8" /> */}
        <hr className="w-full border-t  mt-10" />
      </div>

      <p className="text-zinc-800 font-medium dark:text-zinc-50 text-center">{t('forgot-pass-have-no-account')} 
        {t.rich('forgot-pass-create-account',{
          span:(value)=><span className="text-maroon-700 font-medium dark:text-softpink-300"> {value}</span>,
        })}
        </p>
    </div>
  );
}
