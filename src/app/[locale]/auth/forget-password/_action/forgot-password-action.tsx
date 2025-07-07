"use server";
import { JSON_HEADER } from "@/lib/constants/api.constants";
import { TForgotPasswordFormFields } from "@/lib/schema/auth.schema";
import { ForgotPasswordResponse } from "@/lib/types/auth";

export async function forgetPassword(ForgotPassInputs: TForgotPasswordFormFields) {
  const response = await fetch(`${process.env.API}/auth/forgotPassword`, {
    method: "POST",
    body: JSON.stringify(ForgotPassInputs),
    headers: { ...JSON_HEADER },
  });

  // response
  const payload: APIResponse<ForgotPasswordResponse> = await response.json();

  // check response status {error , success}
  if ("error" in payload) {
    const errorMessage = payload.error || "Something went wrong ";
    throw new Error(errorMessage);
  }

  return payload;
}
