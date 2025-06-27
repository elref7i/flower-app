"use client";

import { useAuthContext } from "@/lib/context/auth-context";
import VerifyCodeForm from "./_components/verify-code-form";
import { useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
// import ForgotPasswordForm && SetNewPassword

export default function Page() {
  // Use Context
  const { email, step, setEmail, setStep } = useAuthContext();

  // Navigation
  const router = useRouter();

  // Hooks
  useEffect(() => {
    if ((step === "2" || step === "3") && !email) {
      setStep("1");
      setEmail("");
      router.push("/auth/forgot-password");
    }
  }, [step, email, setEmail, setStep, router]);

  return (
    <div className="space-y-4">
      {/* display form dependent on step */}

      {/* put forgotpasswordform  and setnewpassword form*/}

      {/* {step==="1"&&</> } */}
      {/* {step==="3"&&} */}
      
      {step === "2" && <VerifyCodeForm />}
    </div>
  );
}
