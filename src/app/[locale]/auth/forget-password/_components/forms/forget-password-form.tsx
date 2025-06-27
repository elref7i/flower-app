"use client";

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

import useForgetPassword from "../../_hooks/forgot-pass-hook";
import {
  useForgotPasswordSchema,
  TForgotPasswordFormFields,
} from "@/lib/schema/auth.schema";

export default function ForgetPasswordForm() {
  const t = useTranslations();
  const schema = useForgotPasswordSchema();
  const { ForgetPasswordHookFun } = useForgetPassword();

  const form = useForm<TForgotPasswordFormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: TForgotPasswordFormFields) => {
    ForgetPasswordHookFun(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 mt-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] font-medium dark:text-zinc-50">
                  {t("forgetpassword.form-email")}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="user@example.com"
                    className="h-12 rounded-xl w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-maroon-600 w-full text-[14px] font-semibold rounded-[10px] h-11"
          >
            {t("forgetpassword.form-button-Continue")}
          </Button>
        </form>
      </Form>
    </div>
  );
}
