"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { TForgotPasswordFormFields } from "@/lib/schema/auth.schema";
import useForgetPassword from "../_hooks/forgot-pass-hook";
import { useTranslations } from "next-intl";

export default function ForgetPasswordForm() {

  // use translations 
  const t=useTranslations();

  // form felids 
  const {ForgetPasswordHookFun}=useForgetPassword()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });

  // handle  submit function
  const onSubmit = async (values: TForgotPasswordFormFields) => {
         ForgetPasswordHookFun(values)
  };
  return (
    <div className=" ">
       <form className="space-y-7 mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1">
     
        {/* Email */}

        <Label className="text-[14px] font-medium dark:text-zinc-50">{t('forgetpassword.form-email')}</Label>
          <Input
            {...register("email")}
            type="email"
            placeholder="user@example.com"
            id="email"
            className="h-12 rounded-xl w-full"
          />
        </div>

        {/* button */}

        <Button type="submit" className=" bg-maroon-600 w-full  text-[14px] font-semibold  rounded-[10px] h-11  ">
         {t('forgetpassword.form-button-Continue')}
        </Button>
      </form>
    </div>
  );
}

