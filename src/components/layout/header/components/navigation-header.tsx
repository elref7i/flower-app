"use client";
import { cn } from "@/lib/utils/cn";
import { Link, usePathname } from "@/i18n/navigation";
import { ClipboardList, Gift, Headset, House, Info, PartyPopper } from "lucide-react";
import { useTranslations } from "next-intl";
export default function NavigationHeader() {
  // Navigation
  const path = usePathname();

  // Translation
  const t = useTranslations();

  // Links
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
    <nav className="bg-maroon-700 dark:bg-softpink-200 ">
      {/* <div className=" bg-green-300"> */}
        <ul className="flex flex-wrap gap-1 sm:gap-1 md:gap-1 text-white dark:text-maroon-800 justify-center  overflow-x-auto scrollbar-hide">
          {links.map((link) => (
            <li
              key={link.path}
              className={cn(
                "relative flex-shrink-0 ",
                "p-2 sm:p-3",
                link.path === path
                  ? "border-b-2 border-softpink-200 dark:border-maroon-800 text-softpink-200 dark:text-maroon-800"
                  : "hover:bg-maroon-600 dark:hover:bg-softpink-300 transition-colors",
              )}
            >
              <Link className="flex gap-1 sm:gap-2 items-center whitespace-nowrap" href={link.path}>
                <span className="w-4 h-4 sm:w-5 sm:h-5">{link.icon}</span>
                <span className="text-xs sm:text-sm md:text-base">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      {/* </div> */}
    </nav>
  );
}
