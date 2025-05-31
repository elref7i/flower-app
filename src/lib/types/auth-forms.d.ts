import { SetStateAction } from "react";

declare type TAuthForms = "login" | "register" | "forgotPassword" | "verifyCode" | "setPassword";

declare type TSetAuthForm = { setForm: React.Dispatch<SetStateAction<TAuthForms>> };

declare type TListRegisterFormFields = {
  name: "firstName" | "lastName" | "email" | "phone" | "password" | "rePassword";
  type: "text" | "email" | "password";
  placeholder: string;
}[];
