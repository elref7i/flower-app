import { TListRegisterFormFields, TSetAuthForm } from "@/lib/types/auth-forms";
import useRegister from "../hooks/use-register";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Import Shad cn Components
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import { registerSchema, TRegisterFormFields } from "@/lib/schema/auth.schema";
import { DialogTitle } from "@/components/ui/dialog";

// list for register form fields
const formFields: TListRegisterFormFields = [
  { name: "firstName", type: "text", placeholder: "first name" },
  { name: "lastName", type: "text", placeholder: "last name" },
  { name: "phone", type: "text", placeholder: "phone number" },
  { name: "email", type: "email", placeholder: "email" },
  { name: "password", type: "password", placeholder: "password" },
  { name: "rePassword", type: "password", placeholder: "Re-password" },
];

// Register form component
export default function RegisterForm({ setForm }: TSetAuthForm) {
  // Hook for register mutation
  const { isPending, error, registerNewAccount } = useRegister();

  // Form object use hook from react hook form
  const form = useForm<TRegisterFormFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
  });

  // Submit form function
  const onSubmit: SubmitHandler<TRegisterFormFields> = async (values) => {
    await registerNewAccount(values).then(() => setForm("login"));
  };

  return (
    <>
      {/* Form title */}
      <DialogTitle>Register </DialogTitle>
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <Form {...form}>
          {/* Show Error if it is exist */}
          {error && <p>{error.message}</p>}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Map on form list to generate form fields */}
            {formFields.map((input) => (
              <FormField
                key={input.name}
                control={form.control}
                name={input.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>input</FormLabel>
                    <FormControl>
                      <Input placeholder={input.placeholder} type={input.type} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            {/* Radio form field */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal">male</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal">female</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Button to display login form */}
            <p>
              Already have an account?
              <span className="cursor-pointer" onClick={() => setForm("login")}>
                Login
              </span>
            </p>

            {/* Button to submit form */}
            <Button type="submit">Create Account</Button>
          </form>
        </Form>
      )}
    </>
  );
}
