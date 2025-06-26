"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useVerifyCodeSchema, TVerifyCodeFields } from "@/lib/schema/auth.schema";
import { verifyOTPCodeAction } from "../_actions/OTP-Code.action";
import { useState, useRef, useEffect } from "react";
import { useAuthContext } from "@/lib/context/auth-context";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export default function VerifyCodeForm() {
  // Routing
  const router = useRouter();

  // Contetxt
  const { setStep, email } = useAuthContext();

  // Constants
  const schema = useVerifyCodeSchema();

  // Hooks
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [timer, setTimer] = useState(60);
  // Handle Timer
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // Translation
  const t = useTranslations();

  // Form
  const form = useForm<TVerifyCodeFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      resetCode: "",
    },
  });

  // Functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;

    const currentCode = form.getValues("resetCode").split("");
    currentCode[idx] = value;
    const newCode = currentCode.join("");
    form.setValue("resetCode", newCode);

    if (value && idx < 5) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const onSubmit = async (values: TVerifyCodeFields) => {
    console.log("Form Values:", values);
    setIsPending(true);
    setError(null);

    const res = await verifyOTPCodeAction(values);
    setIsPending(false);

    if (res.success) {
      setStep("3");
    } else {
      setError(res.message || "Invalid code.");
    }
  };

  //   Start Timer Func
  const startTimer = () => setTimer(60);

  return (
    <div className="w-96 mx-auto my-20 ">
      {/* Header */}
      <div>
        {/* Title */}
        <h1 className="text-zinc-800  text-2xl font-semibold dark:text-zinc-50">
          {t("otp-title")}
        </h1>
        {/* message */}
        <p className="text-zinc-800 font-normal text-sm pt-1 dark:text-zinc-50">
          {t("otp-headline")}
          {` ${email}`}{" "}
          <Button
            type="button"
            variant="link"
            className="p-0 h-auto ml-1 underline text-blue-700"
            onClick={() => setStep("1")}
          >
            {t("edit-button")}
          </Button>
        </p>
      </div>

      {/* Form */}
      <div className="my-7 border-y py-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="resetCode"
              render={() => (
                <FormItem>
                  <div className="flex justify-center gap-2">
                    {Array(6)
                      .fill(0)
                      .map((_, idx) => (
                        <input
                          key={idx}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          className="w-11 h-11 text-center bg-white  border   rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-primary dark:bg-zinc-600 "
                          ref={(el) => {
                            inputsRef.current[idx] = el!;
                          }}
                          onChange={(e) => handleChange(e, idx)}
                          onKeyDown={(e) => handleBackspace(e, idx)}
                        />
                      ))}
                  </div>
                  <div className="flex justify-end pt-2">
                    <Button
                      type="button"
                      variant="link"
                      className="text-zinc-800 dark:text-zinc-50"
                      onClick={() => {
                        // i didn't handle send new code yet

                        startTimer();
                        toast.success("{t('otp-toast')}");
                      }}
                      disabled={timer > 0}
                    >
                      {timer > 0
                        ? `${t("resend-otp-code")} (00:${String(timer).padStart(2, "0")})`
                        : t("resend-otp-code")}
                    </Button>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <SubmitFeedback>{error}</SubmitFeedback> */}

            <Button
              type="submit"
              className="w-full bg-maroon-600 text-white text-sm font-semibold dark:bg-softpink-300 dark:text-zinc-800"
              disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}
            >
              {t("otp-button")}
            </Button>
          </form>
        </Form>
      </div>

      {/* contact us */}
      <div className="text-center mt-5">
        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-50">
          {t("need-help")}{" "}
          <Button
            type="button"
            variant="link"
            className="text-maroon-700 text-sm font-bold p-0 h-auto align-baseline dark:text-softpink-300"
            onClick={() => router.push("/contact-us")}
          >
            {t("contact-us")}
          </Button>
        </p>
      </div>
    </div>
  );
}
