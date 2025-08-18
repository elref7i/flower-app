"use client";

import { Link } from "@/i18n/navigation";
import separator from "@assets/imgs/separator-1 1.png";
import darkSeparator from "@assets/imgs/separator-1 dark.png";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";

interface AuthFooterProps {
  page?: string;
}

export default function AuthFooter({ page }: AuthFooterProps) {
  // Hook to get currant theme
  const { theme } = useTheme();

  // Hook for translation
  const t = useTranslations();

  return (
    <div className="w-full m-auto mt-9 border border-l-0 border-r-0 border-b-0 border-zinc-200 dark:border-zinc-600 pt-5">
      {/*Message and link you want to navigate*/}
      <h3 className="text-sm font-medium w-fit mx-auto text-zinc-800 dark:text-zinc-50">
        {page === "register"
          ? t.rich("alerdy-account", {
              Link: (value) => (
                <Link
                  href={"/auth/login"}
                  className="cursor-pointer text-maroon-700 font-bold dark:text-softpink-300"
                >
                  {value}
                </Link>
              ),
            })
          : t.rich("no-account", {
              Link: (value) => (
                <Link
                  href={"/auth/register"}
                  className="cursor-pointer text-maroon-700 font-bold dark:text-softpink-300"
                >
                  {value}
                </Link>
              ),
            })}
      </h3>

      {/* Separator photo */}
      <div className="w-[250px] mx-auto md:w-[280px] rotate-180 mt-10 ">
        <Image
          src={theme === "dark" ? darkSeparator : separator}
          className="w-full"
          alt="separator"
        />
      </div>
    </div>
  );
}
