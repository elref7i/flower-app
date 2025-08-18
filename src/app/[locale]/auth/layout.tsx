import { PropsWithChildren } from "react";
import AuthPageImg from "./_components/auth-img";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className=" grid grid-cols-12">
      <section className="col-span-6  flex justify-center items-center">{children}</section>
      <section className="hidden md:block md:col-span-6">
        <AuthPageImg />
      </section>
    </main>
  );
}
