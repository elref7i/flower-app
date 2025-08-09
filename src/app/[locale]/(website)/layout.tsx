import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
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
