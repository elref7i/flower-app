"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function CheckoutButton() {
  // Hook
  const pathname = usePathname();

  // variables
  const pathUrl = pathname === "/en/cart";
  if (!pathUrl) return null;

  //   Route
  const router = useRouter();

  const handleClick = () => {
    router.push("/en/checkout");
  };
  return (
    <Button className="w-full my-3" onClick={() => router.push("/en/checkout")}>
      Checkout
      <MoveRight />
    </Button>
  );
}
