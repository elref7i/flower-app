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
import useLogout from "@/hooks/use-logout";

export default function UpdatePeofileForm({ dataInfo }: { dataInfo: LoggedUserResponse }) {
  //Mutation
  const { editProfileMutation, isPending } = useEditProfile();

  const { logOutMutation, isPending: isLog } = useLogout();

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
      <form onSubmit={form.handleSubmit(onSumbit)} className="space-y-[10px]">
        {/* First Name */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" type="text" className="w-full" {...field} />
              </FormControl>

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
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" type="text" className="w-full" {...field} />
              </FormControl>

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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" className="w-full" {...field} />
              </FormControl>

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
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Phone" type="tel" className="w-full" {...field} />
              </FormControl>

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
            nameButton="delete My Account"
            message="Are you sure you want to delete your account?"
            description="This action is permanent and cannot be undone."
          />

          {/* Submit Data */}
          <Button disabled={!form.formState.isDirty || isPending} type="submit">
            Submit
          </Button>
        </div>
      </form>
      <Button disabled={isLog} onClick={() => logOutMutation()}>
        Logout
      </Button>
    </Form>
  );
}
