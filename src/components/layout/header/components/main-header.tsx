import Link from "next/link";
import { User } from "lucide-react";
import { ModeToggle } from "@/components/common/theme-toggle";
import IconNotificarion from "./icon-notificarion";
import SearchInput from "@/components/common/search-input";
import LanguageToggle from "@/components/common/language-toggle";
import Image from "next/image";
import Logo from "../../../../../public/assets/imgs/logo 1.png";

/**
 * MainHeader Component
 * This component renders the main header of the website.
 * It includes the following elements:
 * - Logo that links to the homepage
 * - Search input for finding gifts
 * - Login button with user icon
 * - Notifications icon
 * - Language switch (currently "العربية")
 * - Theme mode toggle (light/dark)
 *
 * @component
 * @returns JSX.Element The main header JSX layout
 */

export default function MainHeader() {
  return (
    <div className="py-[18px] px-9 flex gap-4">
      {/* Logo */}
      <Link href={"/"}>
        <Image src={Logo} width={85} height={80} alt={"Flower Logo"} />
      </Link>

      {/* Left Header */}
      <div className="flex flex-1 items-center gap-4 ">
        {/* Search input */}
        <SearchInput placeholder={"What awesome gift are you looking for?"} />

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
        <LanguageToggle />

        {/* Mode Toggle  */}
        <ModeToggle />
      </div>
    </div>
  );
}
