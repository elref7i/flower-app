"use client";
import { PasswordInput } from "@/components/common/password-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChangePasswordFields, ChangePasswordSchema } from "@/lib/schema/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useChangePassword } from "../_hooks/use-profile";
import { useTranslations } from "next-intl";

export default function ChangePasswordForm() {
  //Mutation
  const { changePasswordMutation, isPending, isSuccess } = useChangePassword();

  // Trnaslations
  const t = useTranslations();

  // Form
  const form = useForm<ChangePasswordFields>({
    defaultValues: {
      password: "",
      newPassword: "",
    },
    resolver: zodResolver(ChangePasswordSchema),
  });

  // onSubmit
  const onSubmit: SubmitHandler<ChangePasswordFields> = async (values) => {
    await changePasswordMutation(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Old Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("old-password")}</FormLabel>
              <FormControl>
                <PasswordInput placeholder={`${t("old-password")}`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* New Password */}
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("new-password")}</FormLabel>
              <FormControl>
                <PasswordInput placeholder={`${t("new-password")}`} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Actions */}
        <Button disabled={isPending} type="submit" className="">
          {t("change-password-0")}
        </Button>
      </form>
    </Form>
  );
}
