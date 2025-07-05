"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { TVerifyCodeFields } from "@/lib/schema/auth.schema";
import { VerifyRestResponse } from "@/lib/types/auth";

export const verifyOTPCodeAction = async (verifyOTPcodeField: TVerifyCodeFields) => {
  const respone = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify(verifyOTPcodeField),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<VerifyRestResponse> = await respone.json();

  if ("error" in payload) {
    const errorMessage = payload.error || "Something went wrong ";
    throw new Error(errorMessage);
  }

  return payload;
};
