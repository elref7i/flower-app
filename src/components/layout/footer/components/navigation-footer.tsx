import Link from "next/link";
import { linksFooter } from "../constants/links";
/**
 * @function NavigationFooter
 * @description Renders a footer navigation section with a title and a list of links.
 * It uses the `linksFooter` constant to dynamically generate the link items.
 *
 * @returns JSX.Element A React component representing the footer navigation area.
 *
 */

export default function NavigationFooter() {
  return (
    <div className="flex-1">
      {/* Title */}
      <h2 className="text-softpink-300 font-semibold text-[18px]">Discoer our website</h2>
      <ul className="*:text-white space-y-[6px] font-medium">
        {linksFooter.map((link, i) => (
          <li className="w-fit hover:text-softpink-100" key={i}>
            <Link className="flex gap-2 items-center" href={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
