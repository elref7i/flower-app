import { useMutation } from "@tanstack/react-query";
import {
  changePassword,
  deleteAcount,
  editProfile,
  uploadImageProfile,
} from "../_actions/profile.action";
import { ChangePasswordFields, EditProfileSchemaFields } from "@/lib/schema/profile.schema";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { signOut } from "next-auth/react";

// Update Profile
export function useEditProfile() {
  // translations
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
  const router = useRouter();

  const {
    mutate: deleteAcountMutation,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async () => await deleteAcount(),
    onSuccess: (data) => {
      signOut({ callbackUrl: "/" });
      toast.success(t("deleted-account"));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteAcountMutation, isPending, isSuccess };
}

// Edit Image Profile
export function useUploadImageProfile() {
  const t = useTranslations();

  const {
    mutate: editImage,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (formData: FormData) => await uploadImageProfile(formData),
    onSuccess: (data) => {
      toast.success("Success Upload image");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { editImage, isPending, isSuccess };
}
