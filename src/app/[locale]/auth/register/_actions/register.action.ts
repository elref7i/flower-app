"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { RegistrationFields } from "@/lib/schema/auth/register.schema";
import { RegisterResponse } from "@/lib/types/auth";

export const registerAction = async (registrationFields: RegistrationFields) => {
  const respones = await fetch(`${process.env.API}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(registrationFields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<RegisterResponse> = await respones.json();

  return payload;
};
