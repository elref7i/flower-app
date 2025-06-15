import { useTranslations } from "next-intl";
import { z } from "zod";

// Password Role
const passwordRole = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

// Login hook schema
function useLoginSchema() {
  // Translation hook
  const t = useTranslations();

  return z.object({
    email: z
      .string()
      .min(1, { message: t("empty-email-error") })
      .email({ message: t("invalid-email-error") }),
    password: z
      .string()
      .min(1, { message: t("empty-password-error") })
      .regex(passwordRole, { message: t("wrong-password-error") }),
  });
}

// Register hook Schema
function useRegisterSchema() {
  // Translation hook
  const t = useTranslations();

  return z
    .object({
      firstName: z.string().min(1, { message: t("empty-first-name-error") }),
      lastName: z.string().min(1, { message: t("empty-last-name-error") }),
      email: z
        .string()
        .min(1, { message: t("empty-email-error") })
        .email({ message: t("invalid-email-error") }),
      password: z
        .string()
        .min(1, { message: t("empty-password-error") })
        .regex(passwordRole, { message: t("password-role") }),
      rePassword: z.string().min(1, { message: t("empty-re-password-empty") }),
      phone: z
        .string()
        .min(1, { message: t("empty-phone-error") })
        .min(10, { message: t("invalid-phone-error") }),
      gender: z.enum(["male", "female"], { message: t("empty-gender-error") }),
    })
    .refine((value) => value.password === value.rePassword, {
      path: ["rePassword"],
      message: t("confirm-password-error"),
    });
}

// Forgot password schema
function useForgotPasswordSchema() {
  // Translation hook
  const t = useTranslations();

  return z.object({
    email: z
      .string()
      .min(1, { message: t("empty-email-error") })
      .email({ message: t("invalid-email-error") }),
  });
}

// Verify code Schema
function useVerifyCodeSchema() {
  // Translation hook
  const t = useTranslations();

  return z.object({
    resetCode: z
      .string()
      .min(1, { message: t("empty-verification-code-error") })
      .length(6, { message: t("invalid-verification-code") }),
  });
}

// Set password schema
function useSetPasswordSchema() {
  // Translation hook
  const t = useTranslations();

  return z.object({
    email: z
      .string()
      .min(1, { message: t("empty-email-error") })
      .email({ message: t("invalid-email-error") }),
    newPassword: z
      .string()
      .min(1, { message: t("empty-new-password-error") })
      .regex(passwordRole, { message: t("password-role") }),
  });
}

// Declare form types
type TLoginFormFields = z.infer<ReturnType<typeof useLoginSchema>>;
type TRegisterFormFields = z.infer<ReturnType<typeof useRegisterSchema>>;
type TForgotPasswordFormFields = z.infer<ReturnType<typeof useForgotPasswordSchema>>;
type TVerifyCodeFields = z.infer<ReturnType<typeof useVerifyCodeSchema>>;
type TSetPasswordFields = z.infer<ReturnType<typeof useSetPasswordSchema>>;

// Export schemas
export {
  useLoginSchema,
  useForgotPasswordSchema,
  useVerifyCodeSchema,
  useSetPasswordSchema,
  useRegisterSchema,
};

// Export Forms field types
export {
  type TLoginFormFields,
  type TForgotPasswordFormFields,
  type TVerifyCodeFields,
  type TSetPasswordFields,
  type TRegisterFormFields,
};
