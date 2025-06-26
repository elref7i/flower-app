"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import useResetPassword from "../_hooks/reset-pass-hook";
import { useTranslations } from "next-intl";

export default function SetPasswordForm() {

  const t =useTranslations();

    const {ResetPasswordHookFun} =useResetPassword()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
    },
  });

  const onSubmit = async (values: any) => {
    const payload = {
      email: "emanelkaser@gmail.com",
      newPassword: values.newPassword,
    };
    console.log(payload);
    ResetPasswordHookFun(payload);
   
  };
  return (

       <div className=" ">
       <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
       
 
        {/* Password */}
        <div>
            <Label className="text-[14px] font-medium dark:text-zinc-50">{t('password-felid')}</Label>
          <Input
            {...register("password")}
            type="password"
            placeholder="********"
            id="password"
            className="h-12 rounded-xl w-full"
          />
        </div>
        
        {/*re-Password */}
        <div>
          <Label className="text-[14px] font-medium dark:text-zinc-50">{t('confirm-password-felid')}</Label>
          <Input
            {...register("newPassword")}
            type="password"
            placeholder="********"
            id="newPassword"
            className="h-12 rounded-xl w-full"
          />
        </div>

        {/* button */}
         <Button type="submit" className=" bg-maroon-600 w-full mt-9 text-[14px] font-semibold  rounded-[10px] h-11  ">
      Reset Password
        </Button>
      
      </form>
  </div>

  );
}