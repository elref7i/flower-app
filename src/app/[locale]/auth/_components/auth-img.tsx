"use client";
import Image from "next/image";
import img from "@assets/imgs/image 1.png";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";

export default function AuthPageImg() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <section
      className={cn(
        pathName === "/auth/register" ? "h-full" : "h-screen",
        "hidden md:block md:col-span-6 bg-red-700",
      )}
    >
      <Image src={img} className={cn("w-full h-full object-fill")} alt="Auth Image" />
    </section>
  );
}
