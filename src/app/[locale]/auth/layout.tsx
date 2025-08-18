import { PropsWithChildren } from "react";
import AuthPageImg from "./_components/auth-img";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className="grid grid-cols-12">
      <section className="col-span-6">{children}</section>

      {/* Image Auth */}
      <AuthPageImg />
    </main>
  );
}
