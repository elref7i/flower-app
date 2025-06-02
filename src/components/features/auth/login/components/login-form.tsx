import { SubmitHandler, useForm } from "react-hook-form";
import useLogin from "../hooks/use-login";
import { loginSchema, TLoginFormFields } from "@/lib/schema/auth.schema";
import { TSetAuthForm } from "@/lib/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { DialogTitle } from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

// Login Form component
export default function LoginForm({ setForm }: TSetAuthForm) {
  // Hook for translations
  const t = useTranslations();

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
      {/* Form title */}
      <DialogTitle>{t("login")}</DialogTitle>
      <Form {...form}>
        {/* Show error if it is exist */}
        {error && <p>{error.message}</p>}

        {/* Login form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {isPending ? (
            <p>Loading...</p>
          ) : (
            // Form fields
            <div>
              {/* Email field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("email")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("email")} type="text" {...field} />
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
                    <FormLabel>{t("password")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("password")} type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Login option */}
          <div className="flex justify-between">
            {/* Remind me box */}
            <div>
              <Checkbox />
              <span className="ms-3">{t("remind-me")}</span>
            </div>

            {/*Button to show forgot password form */}
            <button>{t("forgot-password")}</button>
          </div>

          {/*Show register Form */}
          <div>
            <p>
              {t.rich("no-account", {
                span: (value) => (
                  <span
                    className="cursor-pointer text-blue-500"
                    onClick={() => setForm("register")}
                  >
                    {value}
                  </span>
                ),
              })}
            </p>
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={isPending}>
            {t("login")}
          </Button>
        </form>
      </Form>
    </>
  );
}
