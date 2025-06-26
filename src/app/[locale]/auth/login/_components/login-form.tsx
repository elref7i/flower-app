"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import useLogin from "../hooks/use-login";
import { TLoginFormFields, useLoginSchema } from "@/lib/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, LoaderCircle } from "lucide-react";

// Import shad cn ui components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PasswordInput } from "@/components/common/password-input";

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
        {/* Show error if it is exist */}
        {error && (
          <p className="bg-red-100 text-red-600 mx-auto py-2 mb-2 rounded-md px-5">
            {error.message}
          </p>
        )}

        {/* Login form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
          {isPending ? (
            <LoaderCircle className="animate-spin my-10 size-16 mx-auto text-maroon-700 dark:text-softpink-300" />
          ) : (
            // Form fields
            <div>
              {/* Email field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel className="text-sm font-medium text-zinc-800">
                      {t("email")}
                    </FormLabel>
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
                      <PasswordInput {...field} ref={field.ref} placeholder="********" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* forgot password button */}

              <Link
                href={"/auth/forget-password"}
                className=" w-fit ms-auto block mt-2 text-maroon-700 dark:text-softpink-300"
              >
                {t("forgot-password")}
              </Link>
            </div>
          )}

          {/* Submit Button */}
          <Button type="submit" disabled={isPending} className="w-full mt-9">
            {t("login")}
          </Button>
        </form>
      </Form>
    </>
  );
}
