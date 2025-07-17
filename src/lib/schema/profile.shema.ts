import { z } from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";
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

export type ProfileSchemaFields = z.infer<typeof ProfileSchema>;
