"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginForm from "./login/components/login-form";
import { useState } from "react";
import RegisterForm from "./register/components/register-form";
import { TAuthForms } from "@/lib/types/auth-forms";
// import ForgotPasswordForm from "./forgot-password/components/forgot-password-form";
// import VerifyCodeForm from "./verify-code/components/verify-code-form";
// import SetPasswordForm from "./set-password/components/set-password-form";

export default function AuthDialog() {
  // State to display selected form
  const [form, setForm] = useState<TAuthForms>("login");

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
      <DialogTrigger>Login</DialogTrigger>

      {/* Dialog content*/}
      <DialogContent>{forms[form as keyof typeof forms]}</DialogContent>
    </Dialog>
  );
}
