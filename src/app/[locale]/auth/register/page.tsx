import AuthFooter from "../login/_components/auth-footer";
import AuthHeader from "../login/_components/auth-header";
import RegisterForm from "./_components/register-form";

export default function page() {
  return (
    <div className=" w-full max-w-[450px] mx-auto px-5">
      {/* Auth header component */}
      <AuthHeader />

      {/* Login Form */}
      <RegisterForm />

      {/* Auth Footer component */}
      <AuthFooter />
    </div>
  );
}
