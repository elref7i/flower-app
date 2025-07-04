"use client";

import { cn } from "@/lib/utils/cn";
import { Link, usePathname } from "@/i18n/navigation";
import { ClipboardList, Gift, Headset, House, Info, PartyPopper } from "lucide-react";
import { useTranslations } from "next-intl";
export default function NavigationHeader() {
  // Navigation
  const path = usePathname();

  // Translations
  const t = useTranslations();

  const links = [
    {
      name: t("home"),
      icon: <House size={20} />,
      path: "/",
    },
    {
      name: t("products"),
      icon: <Gift size={20} />,
      path: "/products",
    },
    {
      name: t("categories"),
      icon: <ClipboardList size={20} />,
      path: "/categories",
    },
    {
      name: t("occasions-title"),
      icon: <PartyPopper size={20} />,
      path: "/occasions",
    },
    {
      name: t("contact"),
      icon: <Headset size={20} />,
      path: "/contact",
    },
    {
      name: t("about"),
      icon: <Info size={20} />,
      path: "/about",
    },
  ];

  return (
    <ul className="flex gap-4 text-white dark:text-maroon-800 justify-center bg-maroon-700 dark:bg-softpink-200">
      {links.map((link) => (
        <li
          key={link.path}
          className={cn(
            "relative p-3",
            link.path === path
              ? "border-b-2 border-softpink-200 dark:border-maroon-800 text-softpink-200 dark:text-maroon-800"
              : "",
          )}
        >
          <Link className="flex gap-2 items-center" href={link.path}>
            <span>{link.icon}</span>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
