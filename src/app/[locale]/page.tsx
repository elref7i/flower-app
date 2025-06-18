"use client";
import { useFormatter, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LoginDialog from "@/components/features/auth/auth-dialog";
import { Button } from "@/components/ui/button";
import logOut from "@/lib/api/logout.api";
import { signOut, useSession } from "next-auth/react";
import LanguageToggle from "@/components/common/language-toggle";
import { ModeToggle } from "@/components/common/theme-toggle";
<<<<<<< Updated upstream
import Description from "../(Home)/home/_components/description";
import { Carousel } from "@/components/ui/carousel";
import CarouselPage from "../(Home)/home/_components/carousel";
=======
import Occasion from "../(Home)/home/_components/mostpopular/occation";
import Description from "../(Home)/home/_components/bestselling/description";
import CarouselPage from "../(Home)/home/_components/bestselling/carousel";
>>>>>>> Stashed changes

export default function HomePage() {
  const { data: session } = useSession();
  const t = useTranslations();
  const format = useFormatter();
  return (
<<<<<<< Updated upstream
  <>
    {/* <div className="flex container   mt-20"> */}

      <div className="flex container mt-20">
        <Description/>
      <CarouselPage/>
      </div>

    {/* </div> */}
  </>
    // <div>
=======
    //  <Occasion/>
    <>
      {/* <div className="flex container mt-10">
        <Description />
        <CarouselPage />
      </div> */}
      <Occasion/>
    </>
>>>>>>> Stashed changes
    //   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //     <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //       {session && session.user.lastName}
    //       <h1 className="text-7xl font-bold text-center text-maroon-500 dark:text-softpink-500">
    //         Flower App
    //       </h1>
    //       <LoginDialog />
    //       <Button
    //         onClick={async () => {
    //           await signOut();
    //           logOut();
    //         }}
    //       >
    //         {t("logout")}
    //       </Button>
    //       <h1 className="text-red-700">{t("hello")}</h1>
    //       <Link href="/about">{t("about-us")}</Link>
    //       <ModeToggle />
    //       <LanguageToggle />
    //       <p>{format.number(250, "currency")}</p>
    //       <p>{format.number(0.3, "percentage")}</p>
    //     </main>
    //   </div>
    // </div>
  );
}
