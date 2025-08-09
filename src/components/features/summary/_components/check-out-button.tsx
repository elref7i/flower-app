"use client";

import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function CheckoutButton() {
  // Hook
  const pathname = usePathname();

  // variables
  const pathUrl = pathname === "/en/cart";
  if (!pathUrl) return null;
  const locale = useLocale();
  //   Route
  const router = useRouter();

  return (
    <Button className="w-full my-3" onClick={() => router.push("/en/checkout")}>
      Checkout
      {locale === "en" ? <MoveRight /> : <MoveLeft />}
    </Button>
  );
}
