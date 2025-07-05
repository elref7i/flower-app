"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { TSetPasswordFields, TSetPasswordFieldsApI } from "@/lib/schema/auth.schema";
import { SetPasswordResponse } from "@/lib/types/auth";
export const ResetPass = async (SetPassInputs: TSetPasswordFieldsApI) => {
  /* calling api */
  const response = await fetch(`${process.env.API}/auth/resetPassword`, {
    method: "PUT",
    body: JSON.stringify(SetPassInputs),
    headers: { ...JSON_HEADER },
  });

  // check response status {error , success}
  const payload: APIResponse<SetPasswordResponse> = await response.json();

  if ("error" in payload) {
    const errorMessage = payload.error || "Something went wrong ";
    throw new Error(errorMessage);
  }

  return payload;
};
