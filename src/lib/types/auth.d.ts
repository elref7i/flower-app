import { SetStateAction } from "react";
import { User } from "next-auth";

// Auth Forms types
declare type TAuthForms = "login" | "register" | "forgotPassword" | "verifyCode" | "setPassword";

declare type TSetAuthForm = { setForm: React.Dispatch<SetStateAction<TAuthForms>> };

// type register form fields
declare type TListRegisterFormFields = {
  name: "firstName" | "lastName" | "email" | "phone" | "password" | "rePassword";
  type: "text" | "email" | "password";
  placeholder: string;
}[];

// Authentication Api's  types
declare type LoginResponse = Pick<User, "user" | "token">;

declare type RegisterResponse = Pick<User, "user" | "token">;

declare type ForgotPasswordResponse = {
  info: string;
};

declare type VerifyRestResponse = {
  status: "Success";
};

declare type SetPasswordResponse = {
  token: string;
};

declare type LogOutResponse = { message: "success" } | { error: string };
