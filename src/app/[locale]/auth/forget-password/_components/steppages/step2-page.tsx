import VerifyCodeForm from "../forms/otp-form";
import AuthFooter from "../../../_components/auth-footer";

export default function OtpPage() {
  return (
    <div className="my-10">
      <VerifyCodeForm />

      {/* Footer */}
      <AuthFooter page="code" />
    </div>
  );
}
