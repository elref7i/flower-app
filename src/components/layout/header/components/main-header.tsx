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
    <div className="section-padding py-4 sm:py-6 ">
      <div className=" flex flex-col sm:flex-row gap-4 sm:gap-6 ">
        {/* Logo */}
        <Link href={"/"} className="flex-shrink-0">
          <Image
            src={imageLogo}
            width={80}
            height={80}
            alt={"Flower Logo"}
            className="w-16 h-auto sm:w-20 md:w-24"
          />
        </Link>

        {/* Main Header Content */}
        <div className="flex flex-1  items-center justify-between gap-4">
          {/* Search input - Hidden on mobile, shown on larger screens */}
          <div className="hidden md:flex flex-1">
            <SearchInput placeholder={t("what-awesome-gift-are-you-looking-for")} />
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Check authorization */}
            {session ? (
              // If user is logged in, show user dropdown
              <UserDropdown
                firstName={session?.user?.firstName}
                lastName={session?.user?.lastName}
                role={session?.user?.role}
              />
            ) : (
              <Link
                className="flex gap-1 sm:gap-2 items-center text-sm sm:text-base px-2 sm:px-3 py-1 sm:py-2 rounded-md hover:bg-muted/50 transition-colors"
                href={"/auth/login"}
              >
                <User size={16} className="sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{t("login")}</span>
              </Link>
            )}
            {/* Icons Section */}
            <ul className="flex items-center gap-3 px-4 py-2 border-x-2 border-zinc-200 dark:border-zinc-700  bg-transparent">
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

            {/* Toggle Translation */}
            <LanguageToggle />

            {/* Mode Toggle */}
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Search - Shown only on mobile */}
      <div className="md:hidden mt-4">
        <SearchInput placeholder={t("what-awesome-gift-are-you-looking-for")} />
      </div>
    </div>
  );
}
