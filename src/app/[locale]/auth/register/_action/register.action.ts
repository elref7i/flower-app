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

  const payload: APIResponse<RegisterResponse> = await response.json();

  if ("error" in payload) throw new Error("Something went Wrong");

  return payload;
}
