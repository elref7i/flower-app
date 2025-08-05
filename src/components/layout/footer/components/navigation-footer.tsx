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
      <h2 className="text-softpink-300 font-semibold text-[18px]">{t("discoer-our-website")}</h2>
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
