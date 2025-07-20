import { useMutation } from "@tanstack/react-query";
import { changePassword, editProfile } from "../_actions/profile.action";
import { ChangePasswordFields, EditProfileSchemaFields } from "@/lib/schema/profile.schema";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

// Update Profile
export function useEditProfile() {
  const t = useTranslations();
  const {
    mutateAsync: editProfileMutation,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (values: EditProfileSchemaFields) => await editProfile(values),
    onSuccess: (data) => {
      toast.success(data.message || t("edit-profile-successfully"));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { editProfileMutation, isPending, isSuccess };
}

// Change Password
export function useChangePassword() {
  const t = useTranslations();

  const {
    mutateAsync: changePasswordMutation,
    data: payload,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (values: ChangePasswordFields) => await changePassword(values),
    onSuccess: (data) => {
      toast.success(data.message || t("password-changed-successfully"));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { changePasswordMutation, isPending, isSuccess };
}
