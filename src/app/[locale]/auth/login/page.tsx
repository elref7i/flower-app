import AuthFooter from "../_components/auth-footer";
import AuthHeader from "../_components/auth-header";
import LoginForm from "./_components/login-form";

export default function page() {
  return (
    <div className=" w-full max-w-[450px] mx-auto px-5">
      {/* Auth header component */}
      <AuthHeader />

      {/* Login Form */}
      <LoginForm />

      {/* Auth Footer component */}
      <AuthFooter page="login" />
    </div>
  );
}
