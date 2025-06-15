"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginForm from "./login/components/login-form";
import { useState } from "react";
import RegisterForm from "./register/components/register-form";
import { TAuthForms } from "@/lib/types/auth";
import { useTranslations } from "next-intl";
// import ForgotPasswordForm from "./forgot-password/components/forgot-password-form";
// import VerifyCodeForm from "./verify-code/components/verify-code-form";
// import SetPasswordForm from "./set-password/components/set-password-form";

export default function AuthDialog() {
  // State to display selected form
  const [form, setForm] = useState<TAuthForms>("login");
  const t = useTranslations();
  // Authentication Forms
  const forms = {
    login: <LoginForm setForm={setForm} />,
    register: <RegisterForm setForm={setForm} />,
    // forgotPassword: <ForgotPasswordForm setForm={setForm} />,
    // verifyCode: <VerifyCodeForm setForm={setForm} />,
    // setPassword: <SetPasswordForm setForm={setForm} />,
  };

  return (
    <Dialog onOpenChange={() => setForm("login")}>
      {/* Trigger button for authentication dialog */}
      <DialogTrigger>{t("login")}</DialogTrigger>

      {/* Dialog content*/}
      <DialogContent className="max-h-screen overflow-y-scroll">
        {forms[form as keyof typeof forms]}
      </DialogContent>
    </Dialog>
  );
}
