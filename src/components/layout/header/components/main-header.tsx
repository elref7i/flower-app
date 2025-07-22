import imageLogo from "@assets/imgs/logo 1.png";
import Image from "next/image";
import { Bell, User } from "lucide-react";
import { ModeToggle } from "@/components/common/theme-toggle";
import SearchInput from "@/components/common/search-input";
import LanguageToggle from "@/components/common/language-toggle";
import { Link } from "@/i18n/navigation";
import { getServerSession } from "next-auth";
import authOptions from "@/auth-options";
import { getTranslations } from "next-intl/server";
import Notification from "./notifications/notification";
import { notificationIcons } from "../constants/icons";
import CartIcon from "./cart/cart-icon";
import WishlistIcon from "./wishlist/wishlist-icon";

export default async function MainHeader() {
  const t = await getTranslations();
  const session = await getServerSession(authOptions);

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
          {session?.user ? t("welcome", { name: session?.user.firstName }) : t("login")}
        </Link>

        <ul className="flex gap-1 items-center px-3 border-r border-l border-zinc-300 dark:border-zinc-700">
          <WishlistIcon />
          <CartIcon />
        </ul>

        {/* Toggle Transelation */}
        <LanguageToggle />

        {/* Mode Toggle  */}
        <ModeToggle />
      </div>
    </div>
  );
}
