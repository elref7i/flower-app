import imageLogo from "../../../../public/assets/imgs/logo 1.png";
import Image from "next/image";
import NavigationFooter from "./components/navigation-footer";
import SubscribeFooter from "./components/subscribe-footer";
import { useTranslations } from "next-intl";

export default function Footer() {
  //Translations
  const t = useTranslations();

  return (
    <footer className="bg-zinc-800 dark:bg-zinc-900 flex py-10">
      {/* Container */}
      <div className="container flex gap-4">
        {/* Logo */}
        <div className="text-center">
          {/* Image Logo */}
          <Image src={imageLogo} width={240} height={225} alt={"Rose E-commerce App"}></Image>

          {/* Name Website */}
          <h1 className="text-[18px] font-semibold text-softpink-300">
            {t("rose-e-commerce-app")}
          </h1>

          {/* Copyright */}
          <p className="text-zinc-100">
            {t("all-rights-reserved-or-2025", {
              year: 2025,
            })}
          </p>
        </div>

        {/* Links */}
        <NavigationFooter />

        {/* Subscribe*/}
        <SubscribeFooter />
      </div>
    </footer>
  );
}
