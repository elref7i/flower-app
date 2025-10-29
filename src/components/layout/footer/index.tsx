import imageLogo from "@assets/imgs/logo 1.png";
import Image from "next/image";
import NavigationFooter from "./components/navigation-footer";
import SubscribeFooter from "./components/subscribe-footer";
import { useTranslations } from "next-intl";

export default function Footer() {
  //Translations
  const t = useTranslations();

  return (
    <footer className="bg-zinc-800 dark:bg-zinc-900 py-8 sm:py-12 md:py-16">
      {/* Container */}
      <div className="content-max-width section-padding">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="text-center lg:text-left lg:flex-shrink-0">
            {/* Image Logo */}
            <Image
              src={imageLogo}
              width={240}
              height={225}
              alt={"Rose E-commerce App"}
              className="w-32 h-auto sm:w-40 md:w-48 lg:w-56 mx-auto lg:mx-0"
            />

            {/* Name Website */}
            <h1 className="responsive-text-base font-semibold text-softpink-300 mt-4">
              {t("rose-e-commerce-app")}
            </h1>

            {/* Copyright */}
            <p className="responsive-text-sm text-zinc-100 mt-2">
              {t("all-rights-reserved-or-2025", {
                year: 2025,
              })}
            </p>
          </div>

          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:flex-1">
            {/* Links */}
            <NavigationFooter />

            {/* Subscribe*/}
            <SubscribeFooter />
          </div>
        </div>
      </div>
    </footer>
  );
}
