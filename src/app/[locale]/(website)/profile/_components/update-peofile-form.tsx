"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { EditProfileSchema, EditProfileSchemaFields } from "@/lib/schema/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEditProfile } from "../_hooks/use-profile";
import { ConfirmDangerAction } from "@/components/common/confirm-danger-action";
import { useLocale, useTranslations } from "next-intl";

export default function UpdatePeofileForm({ dataInfo }: { dataInfo: LoggedUserResponse }) {
  //Mutation
  const { editProfileMutation, isPending } = useEditProfile();

  // Translations
  const t = useTranslations();

  //Locale
  const locale = useLocale();

  // Form
  const form = useForm<EditProfileSchemaFields>({
    defaultValues: {
      firstName: dataInfo.user.firstName ?? "",
      lastName: dataInfo.user.lastName ?? "",
      email: dataInfo.user.email ?? "",
      phone: dataInfo.user.phone ?? "",
    },
    resolver: zodResolver(EditProfileSchema),
  });

  // onSubmit
  const onSumbit: SubmitHandler<EditProfileSchemaFields> = async (values) => {
    await editProfileMutation(values);
    form.reset(values);
  };

  return (
    <Form {...form}>
      {/* Form */}
      <form onSubmit={form.handleSubmit(onSumbit)} className="space-y-[10px]">
        {/* First Name */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel>{t("first-name")}</FormLabel>

              {/* Input */}
              <FormControl>
                <Input
                  placeholder={`${t("first-name")}`}
                  type="text"
                  className="w-full"
                  {...field}
                />
              </FormControl>

              {/* Message */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Last Name */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel>{t("last-name")}</FormLabel>

              {/* Input */}
              <FormControl>
                <Input
                  placeholder={`${t("last-name")}`}
                  type="text"
                  className="w-full"
                  {...field}
                />
              </FormControl>

              {/* Message */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel>{t("email")}</FormLabel>

              {/* Input */}
              <FormControl>
                <Input placeholder="Email" type="email" className="w-full" {...field} />
              </FormControl>

              {/* Message */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel>{t("phone-number")}</FormLabel>

              {/* Input */}
              <FormControl>
                <Input dir="rtl" placeholder="Phone" type="tel" className="w-full" {...field} />
              </FormControl>

              {/* Message */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Gender */}
        <Input
          disabled
          placeholder="Gender"
          type="text"
          className="w-full"
          value={dataInfo.user.gender}
        />

        {/* Actions */}
        <div className="flex items-center justify-between mt-4">
          {/* Delete Acount */}
          <ConfirmDangerAction
            nameButton={`${t("delete-my-account")}`}
            message={`${t("are-you-sure-you-want-to-delete-your-account")}`}
            description={`${t("this-action-is-permanent-and-cannot-be-undone")}`}
          />

          {/* Submit Data */}
          <Button disabled={!form.formState.isDirty || isPending} type="submit">
            {t("submit")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
