import { User } from "next-auth";

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
