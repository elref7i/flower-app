"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import useLogin from "../hooks/use-login";
import { TLoginFormFields, useLoginSchema } from "@/lib/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Loader2Icon } from "lucide-react";

// Login Form component
export default function LoginForm() {
  // Hook for translations
  const t = useTranslations();

  // login schema hook
  const loginSchema = useLoginSchema();

  // Hook to make login mutation
  const { isPending, error, login } = useLogin();

  // form object from react hook form by using useForm hook
  const form = useForm<TLoginFormFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  // Submit form function
  const onSubmit: SubmitHandler<TLoginFormFields> = (values) => {
    login(values);
  };

  return (
    <>
      <Form {...form}>
        {/* Login form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
          {/* Form fields */}
          <div>
            {/* Email field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="text-sm font-medium text-zinc-800">{t("email")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="user@example.com"
                      type="text"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-zinc-800 mt-4">
                    {t("password")}
                  </FormLabel>
                  <FormControl>
                    <Input type="password" className="w-full" {...field} placeholder="********" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* forgot password button */}

            <Link
              href={"/auth/forget-password"}
              className="w-fit ms-auto block mt-2 text-maroon-700 dark:text-softpink-300 mb-9"
            >
              {t("forgot-password")}
            </Link>
          </div>
          {/* Show error if it is exist */}
          {error && (
            <p className="bg-red-100 text-red-600 mx-auto py-2 mb-4 rounded-md px-5">
              {error.message}
            </p>
          )}
          {/* Submit Button */}
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? (
              <>
                <Loader2Icon className="animate-spin text-maroon-700 dark:text-softpink-300" />
                <span className="text-zinc-700 dark:text-zinc-100"> please waite</span>
              </>
            ) : (
              t("login")
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}
