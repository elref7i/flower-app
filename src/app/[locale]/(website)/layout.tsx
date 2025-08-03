import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { getSession } from "next-auth/react";

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  console.log(session);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      {children}

      {/* Footer */}
      <Footer />

      {/* Toaster */}
      <Toaster />
    </>
  );
}
