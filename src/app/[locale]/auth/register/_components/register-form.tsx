"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";

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
import useRegister from "../_hook/useRegister";

const COUNTRIES = [
  { value: "EG", label: "EG (+20)", dialCode: "+20", flag: "🇪🇬" },
  { value: "SA", label: "SA (+966)", dialCode: "+966", flag: "🇸🇦" },
  { value: "AE", label: "AE (+971)", dialCode: "+971", flag: "🇦🇪" },
  { value: "US", label: "US (+1)", dialCode: "+1", flag: "🇺🇸" },
] as const;

export default function RegisterForm() {
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
      confirmPassword: "",
    },
    mode: "onBlur",
  });
  const { registerHookFunc } = useRegister();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  const onSubmit = async (values: TRegisterFormFields) => {
    // Simulate async submission
    // await new Promise((r) => setTimeout(r, 900));
    // // eslint-disable-next-line no-console

    registerHookFunc(values);
    console.log("Submitted:", values);
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        {/* First and Last name */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-zinc-800">{"First name"}</FormLabel>
                <FormControl>
                  <Input placeholder="Jonathan" className="w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-zinc-800">{"Last name"}</FormLabel>
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
              <FormLabel className="text-sm font-medium text-zinc-800">{"Email"}</FormLabel>
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
              <FormLabel className="text-sm font-medium text-zinc-800">{"Phone"}</FormLabel>
              <FormControl>
                <div
                  className="
                      w-full rounded-md border border-zinc-300 px-2 py-1.5
                      focus-within:ring-2 focus-within:ring-zinc-950
                      dark:focus-within:ring-zinc-300
                    "
                >
                  <PhoneInput
                    defaultCountry="EG"
                    value={(field.value as any) || undefined}
                    onChange={(v) => field.onChange(v ?? "")}
                    placeholder="Enter phone number"
                    international={false}
                    className="PhoneInput w-full"
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
              <FormLabel className="text-sm font-medium text-zinc-800">{"Gender"}</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
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
              <FormLabel className="text-sm font-medium text-zinc-800">{"Password"}</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="w-full pr-10"
                    placeholder="Password@12345"
                    {...field}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute inset-y-0 right-0 grid w-10 place-items-center text-zinc-500 hover:text-zinc-700"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-zinc-800">
                {"Confirm Password"}
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showConfirm ? "text" : "password"}
                    className="w-full pr-10"
                    placeholder="********"
                    {...field}
                  />
                  <button
                    type="button"
                    aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                    onClick={() => setShowConfirm((s) => !s)}
                    className="absolute inset-y-0 right-0 grid w-10 place-items-center text-zinc-500 hover:text-zinc-700"
                  >
                    {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button type="submit" disabled={isSubmitting} className="w-full ">
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>{"Please wait"}</span>
            </span>
          ) : (
            "Create account"
          )}
        </Button>
      </form>
    </Form>
  );
}
