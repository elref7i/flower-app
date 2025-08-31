declare type EditProfileResponse = {
  user: ApplicationUser;
};

declare type LoggedUserResponse = EditProfileResponse;

declare type ChangePasswordResponse = {
  token: string;
};
