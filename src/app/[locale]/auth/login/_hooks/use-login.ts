"use client";
import { TLoginFormFields } from "@/lib/schema/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";

// Login hook
export default function useLogin() {
  // Mutation Hook
  const { isPending, error, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: async ({ email, password }: TLoginFormFields) => {
      const response = await signIn("credentials", { email, password, redirect: false });
      if (response?.error) throw new Error(response.error || "Can't logging in");
      return response;
    },
    onSuccess: () => {
      window.location.href = "/";
    },
  });
  return { isPending, error, login: mutate };
}
