import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
/**
 * @function NavigationFooter
 * @description Renders a footer navigation section with a title and a list of links.
 * It uses the `linksFooter` constant to dynamically generate the link items.
 *
 * @returns JSX.Element A React component representing the footer navigation area.
 *
 */

export default function NavigationFooter() {
  //Translation
  const t = useTranslations();

  //Links Footer
  const linksFooter = [
    {
      name: t("home"),
      path: "/home",
    },
    {
      name: t("products"),
      path: "/products",
    },
    {
      name: t("categories"),
      path: "/categories",
    },
    {
      name: t("occasions-title"),
      path: "/occasions",
    },
    {
      name: t("contact"),
      path: "/contact",
    },
    {
      name: t("about"),
      path: "/about",
    },
    {
      name: t("terms-and-conditions"),
      path: "/terms-conditions",
    },
    {
      name: t("privacy-policy"),
      path: "/privacy-policy",
    },
    {
      name: t("faqs"),
      path: "/FAQs",
    },
  ];

  return (
    <div className="flex-1">
      {/* Title */}
      <h2 className="text-softpink-300 font-semibold responsive-text-base mb-4">
        {t("discoer-our-website")}
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 sm:gap-3">
        {linksFooter.map((link, i) => (
          <li key={i}>
            <Link
              className="text-white hover:text-softpink-100 transition-colors responsive-text-sm font-medium block py-1"
              href={link.path}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
