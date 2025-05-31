import { z } from "zod";

// Password Role
const passwordRole = {
  regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
  message:
    "Your password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.",
};

// Login form schema
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email Shouldn't Be Empty" })
    .email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(1, { message: "Password Shouldn't Be Empty" })
    .regex(passwordRole.regex, { message: "Wrong password" }),
});

// Register Schema
const registerSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name Shouldn't Be Empty" }),
    lastName: z.string().min(1, { message: "Last name Shouldn't Be Empty" }),
    email: z
      .string()
      .min(1, { message: "Email Shouldn't Be Empty" })
      .email({ message: "Invalid Email" }),
    password: z
      .string()
      .min(1, { message: "Password Shouldn't Be Empty" })
      .regex(passwordRole.regex, { message: passwordRole.message }),
    rePassword: z.string().min(1, { message: "Email Shouldn't Be Empty" }),
    phone: z
      .string()
      .min(1, { message: "Email Shouldn't Be Empty" })
      .min(10, { message: "Your phone number should be at least 10 numbers" }),
    gender: z.enum(["male", "female"], { message: "You should specify gender" }),
  })
  .refine((value) => value.password === value.rePassword, {
    path: ["rePassword"],
    message: "Confirm password field doesn't match with password field",
  });

// Forgot password schema
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email Shouldn't Be Empty" })
    .email({ message: "Invalid Email" }),
});

// Verify code Schema
const verifyCodeSchema = z.object({
  resetCode: z
    .string()
    .min(1, { message: "You Should Enter Verification Code" })
    .length(6, { message: "The Code must Be 6 digits" }),
});

// Set password schema
const setPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email Shouldn't Be Empty" })
    .email({ message: "Invalid Email" }),
  newPassword: z
    .string()
    .min(1, { message: "New Password Shouldn't Be Empty" })
    .regex(passwordRole.regex, { message: passwordRole.message }),
});

// Declare form types
type TLoginFormFields = z.infer<typeof loginSchema>;
type TRegisterFormFields = z.infer<typeof registerSchema>;
type TForgotPasswordFormFields = z.infer<typeof forgotPasswordSchema>;
type TVerifyCodeFields = z.infer<typeof verifyCodeSchema>;
type TSetPasswordFields = z.infer<typeof setPasswordSchema>;

// Export schemas
export { loginSchema, forgotPasswordSchema, verifyCodeSchema, setPasswordSchema, registerSchema };

// Export Forms field types
export {
  type TLoginFormFields,
  type TForgotPasswordFormFields,
  type TVerifyCodeFields,
  type TSetPasswordFields,
  type TRegisterFormFields,
};
