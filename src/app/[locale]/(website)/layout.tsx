import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { headers } from "next/headers";

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const pathname = headersList.get("x-next-url");
  console.log("pathname", pathname);

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
