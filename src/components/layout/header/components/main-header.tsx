import imageLogo from "../../../../../public/assets/imgs/logo 1.png";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { ModeToggle } from "@/components/common/theme-toggle";
import IconNotificarion from "./icon-notificarion";

export default function MainHeader() {
  return (
    <div className="py-[18px] px-9 flex gap-4">
      {/* Logo */}
      <Link href={"/"}>
        <Image src={imageLogo} width={85} height={80} alt={"Flower Logo"} />
      </Link>

      {/* Left Header */}
      <div className="flex flex-1 items-center gap-4 ">
        {/* Search input */}
        <Input
          className="flex-1 h-[52px]"
          type="search"
          placeholder="What awesome gift are you looking for?"
        />

        {/* Button Login */}
        <Link className="flex gap-[6px] items-center" href={"/login"}>
          <span>
            <User size={20} />
          </span>
          Login
        </Link>

        {/* Icon notifiactions */}
        <IconNotificarion />

        {/* Toggle Transelation */}
        <p className="cursor-pointer">العربية</p>

        {/* Mode Toggle  */}
        <ModeToggle />
      </div>
    </div>
  );
}
