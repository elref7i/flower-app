import { useMutation } from "@tanstack/react-query";
import { changePassword, deleteAcount, editProfile } from "../_actions/profile.action";
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

// Delete Account
export function useDeleteAcount() {
  const t = useTranslations();

  const {
    mutateAsync: deleteAcountMutation,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async () => await deleteAcount(),
    onSuccess: (data) => {
      toast.success(data.message || t("deleted-account"));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteAcountMutation, isPending, isSuccess };
}
