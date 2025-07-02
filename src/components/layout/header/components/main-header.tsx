import imageLogo from "@assets/imgs/logo 1.png";
import Image from "next/image";
import { User } from "lucide-react";
import { ModeToggle } from "@/components/common/theme-toggle";
import IconNotification from "./icon-notification";
import SearchInput from "@/components/common/search-input";
import LanguageToggle from "@/components/common/language-toggle";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { getServerSession } from "next-auth";
import authOptions from "@/auth-options";

export default async function MainHeader() {
  const t = await getTranslations();
  const session = await getServerSession(authOptions);
  let name = session?.user?.firstName;
  return (
    <div className="py-[18px] px-9 flex gap-4">
      {/* Logo */}
      <Link href={"/"}>
        <Image src={imageLogo} width={85} height={80} alt={"Flower Logo"} />
      </Link>

      {/* Left Header */}
      <div className="flex flex-1 items-center gap-4 ">
        {/* Search input */}
        <SearchInput placeholder={"What awesome gift are you looking for?"} />

        {/* Button Login */}
        <Link className="flex gap-[6px] items-center" href={"/auth/login"}>
          <span>
            <User size={20} />
          </span>
          {name ? t("welcome", { name }) : t("login")}
        </Link>

        {/* Icon notifiactions */}
        <IconNotification />

        {/* Toggle Transelation */}
        <LanguageToggle />

        {/* Mode Toggle  */}
        <ModeToggle />
      </div>
    </div>
  );
}
