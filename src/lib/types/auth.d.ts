import { SetStateAction } from "react";
import { User } from "next-auth";
import AuthHeader from "./../../app/[locale]/auth/_components/auth-header";

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

declare type AuthHeaderProps = {
  message: string;
};

declare type AuthFooterProps = {
  message: string;
  link: string;
};
