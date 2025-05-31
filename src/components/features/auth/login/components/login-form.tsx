import { SubmitHandler, useForm } from "react-hook-form";
import useLogin from "../hooks/use-login";
import { loginSchema, TLoginFormFields } from "@/lib/schema/auth.schema";
import { TSetAuthForm } from "@/lib/types/auth-forms";
import { zodResolver } from "@hookform/resolvers/zod";

// Import shad cn ui components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { DialogTitle } from "@/components/ui/dialog";

// Login Form component
export default function LoginForm({ setForm }: TSetAuthForm) {
  // Hook to make login mutation
  const { isPending, error, login } = useLogin();

  // form object from react hook form by using useForm hook
  const form = useForm<TLoginFormFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  // Submit form function
  const onSubmit: SubmitHandler<TLoginFormFields> = (values) => {
    login(values);
  };

  return (
    <>
      {/* Form title */}
      <DialogTitle>Login</DialogTitle>
      <Form {...form}>
        {/* Show error if it is exist */}
        {error && <p>{error.message}</p>}

        {/* Login form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {isPending ? (
            <p>Loading...</p>
          ) : (
            // Form fields
            <div>
              {/* Email field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" type="text" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Login option */}
          <div className="flex justify-between">
            {/* Remind me box */}
            <div>
              <Checkbox />
              <span className="ms-3">Remind me</span>
            </div>

            {/*Button to show forgot password form */}
            <button>forgot Password</button>
          </div>

          {/*Show register Form */}
          <div>
            <p>
              No account?
              <span className="cursor-pointer" onClick={() => setForm("register")}>
                Create one here
              </span>
            </p>
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={isPending}>
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
