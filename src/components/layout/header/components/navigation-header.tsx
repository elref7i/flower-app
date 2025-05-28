import Link from "next/link";
import { links } from "../constants/links";

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
  return (
    <ul className="flex p-4 gap-4 text-white dark:text-zinc-800 justify-center bg-maroon-700 dark:bg-softpink-200">
      {links.map((link, i) => (
        <li key={i}>
          <Link className="flex gap-2 items-center" href={link.path}>
            <span>{link.icon}</span>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
