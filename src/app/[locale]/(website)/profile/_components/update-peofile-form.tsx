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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProfileSchema, ProfileSchemaFields } from "@/lib/schema/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function UpdatePeofileForm() {
  // Session
  const { data: session } = useSession();

  // Form
  const form = useForm<ProfileSchemaFields>({
    resolver: zodResolver(ProfileSchema),
  });

  const onSumbit: SubmitHandler<ProfileSchemaFields> = (values) => {
    console.log(values);
  };

  useEffect(() => {
    if (session?.user) {
      const gender = session?.user.gender;
      const isValidGender = gender === "male" || gender === "female";

      form.reset({
        firstName: session.user.firstName ?? "",
        lastName: session.user.lastName ?? "",
        email: session.user.email ?? "",
        phone: session.user.phone ?? "",
        gender: isValidGender ? gender : "male",
      });
    }
  }, [session, form]);

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
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a gender" />
                  </SelectTrigger>
                  <SelectContent ref={field.ref}>
                    <SelectGroup>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Actions */}
        <div className="flex items-center justify-between mt-4">
          <Button type="button" variant={"ghost"} className="text-maroon-500 font-medium">
            delete My Account
          </Button>
          <Button disabled={!form.formState.isDirty} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
