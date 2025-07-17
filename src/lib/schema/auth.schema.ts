import { useTranslations } from "next-intl";
import { z } from "zod";
import { PASSWORD_REGEX } from "../constants/password-regx";

// Password Role

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
      .regex(PASSWORD_REGEX, { message: t("wrong-password-error") }),
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
        .regex(PASSWORD_REGEX, { message: t("password-role") }),
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
      .string({
        required_error: t("empty-email-error"),
      })
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

  return z
    .object({
      Password: z
        .string({
          required_error: t("empty-new-password-error"),
        })
        .regex(PASSWORD_REGEX, { message: t("password-role") }),

      newPassword: z.string({
        required_error: t("schema.empty-confirm-password-error"),
      }),
    })
    .refine((data) => data.Password === data.newPassword, {
      path: ["newPassword"],
      message: t("schema.passwords-dont-match-error"),
    });
}
// Set password Api schema
function useSetPasswordApiSchema() {
  // Translation hook
  const t = useTranslations();

  return z.object({
    email: z
      .string({
        required_error: t("empty-email-error"),
      })
      .email({ message: t("invalid-email-error") }),

    newPassword: z
      .string({ required_error: t("empty-password-error") })
      .min(1, { message: t("empty-password-error") })
      .regex(PASSWORD_REGEX, { message: t("wrong-password-error") }),
  });
}
// Declare form types
type TLoginFormFields = z.infer<ReturnType<typeof useLoginSchema>>;
type TRegisterFormFields = z.infer<ReturnType<typeof useRegisterSchema>>;
type TForgotPasswordFormFields = z.infer<ReturnType<typeof useForgotPasswordSchema>>;
type TVerifyCodeFields = z.infer<ReturnType<typeof useVerifyCodeSchema>>;
type TSetPasswordFields = z.infer<ReturnType<typeof useSetPasswordSchema>>;
type TSetPasswordFieldsApI = z.infer<ReturnType<typeof useSetPasswordApiSchema>>;
// Export schemas
export {
  useLoginSchema,
  useForgotPasswordSchema,
  useVerifyCodeSchema,
  useSetPasswordSchema,
  useSetPasswordApiSchema,
  useRegisterSchema,
};

// Export Forms field types
export {
  type TLoginFormFields,
  type TForgotPasswordFormFields,
  type TVerifyCodeFields,
  type TSetPasswordFields,
  type TRegisterFormFields,
  type TSetPasswordFieldsApI,
};
