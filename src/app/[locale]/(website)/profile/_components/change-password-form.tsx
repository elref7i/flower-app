"use client";
import { PasswordInput } from "@/components/common/password-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChangePasswordFields, ChangePasswordSchema } from "@/lib/schema/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useChangePassword } from "../_hooks/use-profile";

export default function ChangePasswordForm() {
  //Mutation

  const { changePasswordMutation, isPending, isSuccess } = useChangePassword();

  // Form
  const form = useForm<ChangePasswordFields>({
    defaultValues: {
      password: "",
      newPassword: "",
    },
    resolver: zodResolver(ChangePasswordSchema),
  });

  const onSumbit: SubmitHandler<ChangePasswordFields> = async (values) => {
    await changePasswordMutation(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSumbit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Old Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Old Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="New Password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Actions */}
        <Button disabled={isPending} type="submit" className="">
          Change Password
        </Button>
      </form>
    </Form>
  );
}
