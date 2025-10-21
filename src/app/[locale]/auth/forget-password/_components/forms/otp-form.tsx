"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useVerifyCodeSchema, TVerifyCodeFields } from "@/lib/schema/auth.schema";
import { forgetPassword } from "../../_action/forgot-password-action";
import { useState, useEffect } from "react";
import { useAuthContext } from "@/lib/context/auth-context";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import useOtpCode from "../../_hooks/use-verify-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function VerifyCodeForm() {
  // Contetxt
  const { setStep, email } = useAuthContext();

  // Constants
  const schema = useVerifyCodeSchema();
  const { VerifyOtpHookFun, isPending } = useOtpCode();

  // Hooks
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // Form
  const form = useForm<TVerifyCodeFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      resetCode: "",
    },
  });

  // Submition Function
  const onSubmit = (values: TVerifyCodeFields) => {
    VerifyOtpHookFun(values);
  };

  //   Start Timer Func
  const startTimer = () => setTimer(60);

  // Handle Resend Code Function
  const resendCoade = async () => {
    try {
      const response = await forgetPassword({ email });

      if (response.message === "success") {
        toast.success(t("otp.otp-toast"));
        startTimer();
      } else {
        toast.error(t("otp.resend-code-fail-message"));
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  // Translation
  const t = useTranslations();

  return (
    <div className="w-96 mx-auto">
      {/* Header */}
      <div className="border-b-2 pb-3">
        {/* Title */}
        <h1 className="text-zinc-800 text-2xl font-semibold dark:text-zinc-50">
          {t("otp.otp-title")}
        </h1>
        {/* message */}
        <div className="">
          <div className="flex items-center justify-between text-zinc-800 font-normal text-sm pt-1 dark:text-zinc-50">
            <div
              className="overflow-hidden whitespace-nowrap text-ellipsis pe-2 max-w-[calc(100%-60px)]"
              title={email}
            >
              {t("otp.otp-headline")} {email}
            </div>
            <Button
              type="button"
              variant="link"
              className="p-0 h-auto underline text-blue-700 w-[60px] text-right"
              onClick={() => setStep("1")}
            >
              {t("otp.edit-button")}
            </Button>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="pt-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="resetCode"
              render={() => (
                <FormItem>
                  {/* OTP Inputs */}
                  <FormField
                    control={form.control}
                    name="resetCode"
                    render={({ field }) => (
                      <FormItem>
                        <InputOTP
                          maxLength={6}
                          {...field}
                          value={field.value}
                          onChange={field.onChange}
                          disabled={isPending}
                          className="flex gap-3 focus:border-maroon-600"
                        >
                          <InputOTPGroup className="flex gap-3 mx-auto">
                            {[...Array(6)].map((_, i) => (
                              <InputOTPSlot
                                key={i}
                                index={i}
                                className="w-11 h-11 text-center text-xl focus:border-maroon-600 rounded-md border bg-white dark:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            ))}
                          </InputOTPGroup>
                        </InputOTP>

                        {/* Resend Code Button */}
                        <div className="flex justify-end pt-2">
                          <Button
                            type="button"
                            variant="link"
                            className="text-zinc-800 dark:text-zinc-50"
                            onClick={resendCoade}
                            disabled={timer > 0}
                          >
                            {timer > 0
                              ? `${t("otp.resend-otp-code")} (00:${String(timer).padStart(2, "0")})`
                              : t("otp.resend-otp-code")}
                          </Button>
                        </div>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Send Code Button */}
            <Button
              type="submit"
              className="w-full bg-maroon-600 text-white text-sm font-semibold dark:bg-softpink-300 dark:text-zinc-800"
              disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}
            >
              {t("otp.otp-button")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
