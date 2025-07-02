"use client";

import { links } from "../constants/links";
import { cn } from "@/lib/utils/cn";
import { Link, usePathname } from "@/i18n/navigation";

export default function NavigationHeader() {
  // Navigation
  const path = usePathname();

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
