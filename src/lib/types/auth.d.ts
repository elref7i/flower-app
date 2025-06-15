declare type ApplicationUser = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  photo: string;
  role: string;
  wishlist: string[];
  addresses: string[];
} & DatabaseProperties;

declare type LoginResponse = {
  token: string;
  user: ApplicationUser;
};

declare type RegisterResponse = {
  token: string;
  user: ApplicationUser;
};

declare type ForgotPasswordResponse = {
  info: string;
};

declare type VerifyRestResponse = {
  status: "Success";
};

declare type SetPasswordResponse = {
  token: string;
};
