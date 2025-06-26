import { PropsWithChildren } from "react";
import AuthPageImg from "./_components/auth-img";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex w-full flex-col-reverse md:flex-row flex-wrap md:flex-nowrap xl:max-w-7xl mx-auto">
      <section className="w-full md:w-1/2  flex justify-center items-center">{children}</section>
      <section className=" w-full  md:w-1/2 max-h-screen">
        <AuthPageImg />
      </section>
    </main>
  );
}
