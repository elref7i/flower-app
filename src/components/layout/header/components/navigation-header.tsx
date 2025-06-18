"use client";
import Link from "next/link";
import { links } from "../constants/links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes

/**
 * NavigationHeader Component
 *
 * This component renders the main navigation bar in the header.
 * It dynamically maps over an array of navigation links (imported from constants)
 * and renders each link with its corresponding icon and name.
 *
 * Styling supports both light and dark themes.
 *
 * @component
 * @returns JSX.Element The navigation bar JSX layout
 */

export default function NavigationHeader() {
  const path = usePathname();

  return (
    <ul className="flex gap-4 text-white dark:text-maroon-800 justify-center bg-maroon-700 dark:bg-softpink-200">
      {links.map((link, i) => (
        <li
          key={i}
          className={cn(
            "relative py-3",
            link.path === path
              ? "before:absolute before:w-full before:border-2 before:bottom-0 before:border-softpink-200 dark:before:border-maroon-800 text-softpink-200 dark:text-maroon-800"
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
