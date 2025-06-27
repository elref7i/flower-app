"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useResetPassword from "../../_hooks/reset-pass-hook";
import { useAuthContext } from "@/lib/context/auth-context";
import {
  useSetPasswordSchema,
  TSetPasswordFields,
  TSetPasswordFieldsApI,
} from "@/lib/schema/auth.schema";

export default function SetPasswordForm() {
  const { email } = useAuthContext();
  const t = useTranslations();
  const schema = useSetPasswordSchema();
  const { ResetPasswordHookFun } = useResetPassword();

  const form = useForm<TSetPasswordFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      Password: "",
      newPassword: "",
    },
  });

  const onSubmit = (values: TSetPasswordFields) => {
    const payload: TSetPasswordFieldsApI = {
      email,
      newPassword: values.newPassword,
    };
    ResetPasswordHookFun(payload);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Password */}
        <FormField
          control={form.control}
          name="Password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[14px] font-medium dark:text-zinc-50">
                {t("forgetpassword.password-felid")}
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  {...field}
                  className="h-12 rounded-xl w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[14px] font-medium dark:text-zinc-50">
                {t("forgetpassword.confirm-password-felid")}
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  {...field}
                  className="h-12 rounded-xl w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          className="bg-maroon-600 w-full mt-9 text-[14px] font-semibold rounded-[10px] h-11"
        >
          {t("forgetpassword.reset-password-feild")}
        </Button>
      </form>
    </Form>
  );
}
