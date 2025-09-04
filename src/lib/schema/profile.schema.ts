import { z } from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";
import { PASSWORD_REGEX } from "../constants/password-regx";
export const EditProfileSchema = z.object({
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

export const ImageProfileSchema = z.object({
  photo: z
    .any()
    .refine((file) => file?.size <= 4 * 1024 * 1024, {
      message: "Image must be less than 4MB.",
    })
    .refine((file) => ["image/jpeg", "image/png", "image/webp"].includes(file?.type), {
      message: "Only .jpg, .png, and .webp files are allowed.",
    }),
});

export type EditProfileSchemaFields = z.infer<typeof EditProfileSchema>;
export type ChangePasswordFields = z.infer<typeof ChangePasswordSchema>;
export type ImageProfileField = z.infer<typeof ImageProfileSchema>;
