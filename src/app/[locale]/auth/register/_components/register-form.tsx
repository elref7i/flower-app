"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TRegisterFormFields, useRegisterSchema } from "@/lib/schema/auth.schema";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import useRegister from "../_hook/use-register";
import { GENDERS } from "@/lib/constants/register.constants";

export default function RegisterForm() {
  // Translations
  const t = useTranslations("register");

  // Form & Schema
  const registerSchema = useRegisterSchema();
  const form = useForm<TRegisterFormFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      // gender intentionally omitted to start as undefined
      password: "",
      rePassword: "",
    },
    mode: "onBlur",
  });

  // Hooks
  const { registerHookFunc, isPending, error } = useRegister();

  // Functions
  const onSubmit = async (values: TRegisterFormFields) => {
    registerHookFunc(values);
  };

  // Variables
  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-zinc-800">
                  {t("first-name")}
                </FormLabel>
                <FormControl>
                  <Input placeholder="Jonathan" className="w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-zinc-800">
                  {t("last-name")}
                </FormLabel>
                <FormControl>
                  <Input placeholder="Adrian" className="w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-0">
              <FormLabel className="text-sm font-medium text-zinc-800">{t("email")}</FormLabel>
              <FormControl>
                <Input placeholder="user@example.com" type="email" className="w-full" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-zinc-800">{t("phone")}</FormLabel>
              <FormControl>
                <div
                  className="
                      w-full rounded-md border border-zinc-300 px-2 py-1.5
                    "
                >
                  <PhoneInput
                    value={field.value}
                    onChange={field.onChange}
                    defaultCountry="EG"
                    international
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Gender */}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-zinc-800">
                {t("gender.title")}
              </FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("gender.placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    {GENDERS.map((gender) => (
                      <SelectItem key={gender.value} value={gender.value}>
                        {t(gender.labelKey)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-zinc-800">{t("password")}</FormLabel>
              <FormControl>
                <Input
                  type={"password"}
                  className="w-full pr-10"
                  placeholder="Password@12345"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-zinc-800">
                {t("re-password")}
              </FormLabel>
              <FormControl>
                <Input
                  type={"password"}
                  className="w-full pr-10"
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Error */}
        {error && (
          <p className="text-sm text-center text-red-600">
            {typeof error === "string" ? error : error.message}
          </p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)}
          className="w-full "
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
            </span>
          ) : (
            t("create-account")
          )}
        </Button>
      </form>
    </Form>
  );
}
