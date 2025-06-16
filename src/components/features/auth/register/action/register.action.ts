"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { TRegisterFormFields } from "@/lib/schema/auth.schema";
import { RegisterResponse } from "@/lib/types/auth-api";

// Register action
export default async function registerAction(values: TRegisterFormFields) {
  // request to sign up
  const response = await fetch(`${process.env.BASE_API}/auth/signup`, {
    method: "POST",
    headers: { ...JSON_HEADER },
    body: JSON.stringify(values),
  });

  const payload: APIResponse<RegisterResponse> = await response.json();

  if ("error" in payload) throw new Error(payload.error || "Can't Register your account");
  return payload;
}
