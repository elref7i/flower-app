"use client";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";
import { User } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function SidebarProfile() {
  // pathname
  const pathName = usePathname();

  // Trnaslations
  const t = useTranslations();

  // links
  const links = [
    {
      href: "/profile",
      label: `${t("my-account")}`,
    },
    {
      href: "/profile/change-password",
      label: `${t("change-password")}`,
    },
  ];

  return (
    <aside
      className={cn(
        "col-span-3 p-4 bg-zinc-50  border border-zinc-100 shadow-md rounded-lg",
        "dark:bg-zinc-950 dark:border-zinc-800 ",
      )}
    >
      {/* Links */}
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                pathName === link.href
                  ? "bg-zinc-800 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-800"
                  : "text-zinc-800  dark:text-zinc-50",
                "flex items-center gap-2  py-3 px-4 rounded-lg",
              )}
            >
              <User size={24} />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
