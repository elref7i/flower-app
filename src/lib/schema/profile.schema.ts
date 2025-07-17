import { z } from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";
import { PASSWORD_REGEX } from "../constants/password-regx";
export const ProfileSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .min(1, "First name is required")
    .max(20, "First name must be less than 50 characters"),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(1, "Last name is required")
    .max(20, "Last name must be less than 50 characters"),
  email: z.string({ required_error: "Email is required" }).email("Invalid email format"),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(1, "Phone is required")
    .refine((value) => parsePhoneNumberFromString(value, "EG")?.isValid(), {
      message: "Phone number is not valid",
    }),
  gender: z.enum(["male", "female"], {
    required_error: "Gender is required",
  }),
});

export const ChangePasswordSchema = z.object({
  password: z
    .string()
    .min(1, { message: "Old password is required" })
    .regex(PASSWORD_REGEX, { message: "Old password is not valid" }),
  newPassword: z
    .string()
    .min(1, { message: "New password is required" })
    .regex(PASSWORD_REGEX, { message: "New password is not valid" }),
});

export type ProfileSchemaFields = z.infer<typeof ProfileSchema>;
export type ChangePasswordFields = z.infer<typeof ChangePasswordSchema>;
