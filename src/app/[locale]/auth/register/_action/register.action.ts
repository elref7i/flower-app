"use server";
import { TRegisterFormFields } from "@/lib/schema/auth.schema";
import { JSON_HEADER } from "@/lib/constants/api.constants";
import { RegisterResponse } from "@/lib/types/auth";

export async function registerAction(registerInputs: TRegisterFormFields) {
  const response = await fetch(`${process.env.API}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(registerInputs),
    headers: { ...JSON_HEADER },
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.error || payload.message || "Something went wrong");
  }

  return payload as APIResponse<RegisterResponse>;
}
