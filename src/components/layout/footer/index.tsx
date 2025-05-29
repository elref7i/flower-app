import imageLogo from "../../../../public/assets/imgs/logo 1.png";
import Image from "next/image";
import NavigationFooter from "./components/navigation-footer";
import SubscribeFooter from "./components/subscribe-footer";

/**
 * @function Footer
 * @description Renders the footer section of the website. It includes:
 * - A logo and app name.
 * - Navigation links using the `NavigationFooter` component.
 * - A newsletter subscription form with email input and submit button.
 *
 * @returns JSX.Element The footer component to be displayed at the bottom of the page.
 *
 * @example
 * <Footer />
 */

export default function Footer() {
  return (
    <footer className="bg-zinc-800 dark:bg-zinc-900 flex fixed start-0 end-0 bottom-0 py-10">
      <div className="container flex gap-4">
        {/* Logo */}
        <div className="text-center">
          {/* Image Logo */}
          <Image src={imageLogo} width={240} height={225} alt={"Rose E-commerce App"}></Image>

          {/* Name Website */}
          <h1 className="text-[18px] font-semibold text-softpink-300">Rose E-Commerce App</h1>
          <p className="text-zinc-100">All rights reserved | 2025 </p>
        </div>

        {/* Links */}
        <NavigationFooter />

        {/* Subscribe*/}
        <SubscribeFooter />
      </div>
    </footer>
  );
}
