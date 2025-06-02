import { TListRegisterFormFields, TSetAuthForm } from "@/lib/types/auth";
import useRegister from "../hooks/use-register";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Import Shad cn Components
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import { registerSchema, TRegisterFormFields } from "@/lib/schema/auth.schema";
import { DialogTitle } from "@/components/ui/dialog";
import { useLocale, useTranslations } from "next-intl";

// Register form component
export default function RegisterForm({ setForm }: TSetAuthForm) {
  // Hook for translations
  const t = useTranslations();
  const locale = useLocale();

  // list for register form fields
  const formFields: TListRegisterFormFields = [
    { name: "firstName", type: "text", placeholder: t("first-name") },
    { name: "lastName", type: "text", placeholder: t("last-name") },
    { name: "phone", type: "text", placeholder: t("phone-number") },
    { name: "email", type: "email", placeholder: t("email") },
    { name: "password", type: "password", placeholder: t("password") },
    { name: "rePassword", type: "password", placeholder: t("re-password") },
  ];

  // Hook for register mutation
  const { isPending, error, registerNewAccount } = useRegister();

  // Form object use hook from react hook form
  const form = useForm<TRegisterFormFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
  });

  // Submit form function
  const onSubmit: SubmitHandler<TRegisterFormFields> = async (values) => {
    await registerNewAccount(values).then(() => setForm("login"));
  };

  return (
    <>
      {/* Form title */}
      <DialogTitle>{t("register")} </DialogTitle>
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <Form {...form}>
          {/* Show Error if it is exist */}
          {error && <p>{error.message}</p>}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Map on form list to generate form fields */}
            {formFields.map((input) => (
              <FormField
                key={input.name}
                control={form.control}
                name={input.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{input.placeholder}</FormLabel>
                    <FormControl>
                      <Input placeholder={input.placeholder} type={input.type} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            {/* Radio form field */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>{t("gender")}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      dir={locale === "ar" ? "rtl" : "ltr"}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal">{t("male")}</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal">{t("female")}</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Button to display login form */}
            <p>
              {t.rich("have-account", {
                span: (value) => (
                  <span className="cursor-pointer text-blue-500" onClick={() => setForm("login")}>
                    {value}
                  </span>
                ),
              })}
            </p>

            {/* Button to submit form */}
            <Button type="submit">{t("create-account")}</Button>
          </form>
        </Form>
      )}
    </>
  );
}
