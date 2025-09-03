import { useTranslations } from "next-intl";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
import { PASSWORD_REGEX } from "../constants/password-regx";

// Password Role
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must include at least one uppercase letter")
  .regex(/[a-z]/, "Password must include at least one lowercase letter")
  .regex(/[0-9]/, "Password must include at least one number");

// Login hook schema
function useLoginSchema() {
  // Translation hook
  const t = useTranslations();

  return z.object({
    email: z
      .string()
      .min(1, { message: t("empty-email-error") })
      .email({ message: t("invalid-email-error") }),
    password: passwordSchema,
  });
}

// Register hook Schema
function useRegisterSchema() {
  // Translation hook
  const t = useTranslations();

  return z
    .object({
      firstName: z.string().min(2, "First name is required"),
      lastName: z.string().min(2, "Last name is required"),
      email: z.string().email("Enter a valid email"),
      phone: z
        .string()
        .min(1, "Phone number is required")
        .refine((v) => isValidPhoneNumber(v), "Enter a valid phone number"),
      gender: z.enum(["male", "female", "other"], {
        required_error: "Please select your gender",
      }),
      password: passwordSchema,
      rePassword: z.string(),
    })
    .refine((data) => data.password === data.rePassword, {
      path: ["rePassword"],
      message: "Passwords do not match",
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
      Password: passwordSchema,
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

    newPassword: passwordSchema,
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
