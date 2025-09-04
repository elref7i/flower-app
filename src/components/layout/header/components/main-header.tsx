"use client";
import imageLogo from "@assets/imgs/logo 1.png";
import Image from "next/image";
import { Bell, User } from "lucide-react";
import { ModeToggle } from "@/components/common/theme-toggle";
import IconNotification from "./icon-notification";
import LanguageToggle from "@/components/common/language-toggle";
import { Link } from "@/i18n/navigation";
import UserDropdown from "@/components/commerce-ui/user-dropdown";
import CartIcon from "./cart/cart-icon";
import WishlistIcon from "./wishlist/wishlist-icon";
import { useSession } from "next-auth/react";
import SearchInput from "@/components/common/search-input";
import { useTranslations } from "next-intl";

export default function MainHeader() {
  //Translation
  const t = useTranslations();

  //Session
  const { data: session } = useSession();

  return (
    <div className="py-[18px] px-9 flex gap-4">
      {/* Logo */}
      <Link href={"/"}>
        <Image src={imageLogo} width={85} height={80} alt={"Flower Logo"} />
      </Link>

      {/* Left Header */}
      <div className="flex flex-1 items-center gap-4 ">
        {/* Search input */}
        <SearchInput placeholder={t("what-awesome-gift-are-you-looking-for")} />

        {/* Check authorization */}
        {session ? (
          // If user is logged in, show user dropdown
          <UserDropdown
            firstName={session?.user?.firstName}
            lastName={session?.user?.lastName}
            role={session?.user?.role}
          />
        ) : (
          <Link className="flex gap-[6px] items-center" href={"/auth/login"}>
            <span>
              <User size={20} />
            </span>

            {t("login")}
          </Link>
        )}

        {/* Icons Section */}
        <ul className="flex items-center gap-3 px-4 py-2 border-x border-zinc-200 dark:border-zinc-700 rounded-lg bg-zinc-50/40 dark:bg-zinc-900/40">
          {/* Wishlist Icon */}
          <li>
            <WishlistIcon aria-label="Wishlist" />
          </li>

          {/* Cart Icon */}
          <li>
            <CartIcon aria-label="Cart" />
          </li>

          {/* Notifications Icon */}
          <li>
            <IconNotification aria-label="Notifications" />
          </li>
        </ul>

        {/* Toggle Transelation */}
        <LanguageToggle />

        {/* Mode Toggle  */}
        <ModeToggle />
      </div>
    </div>
  );
}
