"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { TVerifyCodeFields } from "@/lib/schema/auth.schema";
import { VerifyRestResponse } from "@/lib/types/auth";

export const verifyOTPCodeAction = async (verifyOTPcodeField: TVerifyCodeFields) => {
  const respone = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify(verifyOTPcodeField),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<VerifyRestResponse> = await respone.json();

  // for debug
  console.log("Verify OTP Code APIResponse", payload);
  if (payload.status === "Success") {
    return { success: true };
  }

  return {
    success: false,
    message: payload.message,
  };
};
