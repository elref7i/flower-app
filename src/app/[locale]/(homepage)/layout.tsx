import { Toaster } from "@/components/ui/sonner";
import MainHeader from "@/components/layout/header/components/main-header";
import NavigationHeader from "@/components/layout/header/components/navigation-header";
import Footer from "@/components/layout/footer";
import React from "react";

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Main Header */}
      <MainHeader />

      {/* Navigation Header */}
      <NavigationHeader />

      {/* Main Content */}
      {children}

      {/* Footer */}
      <Footer />

      {/* Toaster */}
      <Toaster />
    </>
  );
}
