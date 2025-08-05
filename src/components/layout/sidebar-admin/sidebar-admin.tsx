import { Flower } from "lucide-react";

import logo from "../../../../public/assets/imgs/logo 1.png";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserDropdownMenu } from "@/app/[locale]/(admin)/_components/user-dropdown-menu";
import SidebarLinks from "./_components/sidebar-links";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";
import { JSON_HEADER } from "@/lib/constants/api.constants";
import { getLocale, getTranslations } from "next-intl/server";

// API Response Type
async function getLoggeduser() {
  // get token
  const token = await getTokenFromCookies();
  console.log(token);

  // fetch
  const response = await fetch(`${process.env.API!}/auth/profile-data`, {
    next: { tags: ["profile"] },
    cache: "no-store",
    method: "Get",
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token?.token}`,
    },
  });

  const payload: APIResponse<LoggedUserResponse> = await response.json();
  if ("error" in payload) throw new Error(payload.error);

  return payload;
}

export async function SidebarAdmin() {
  // Fetch the logged user data
  const profileData = await getLoggeduser();

  // Locale
  const locale = await getLocale();

  // Translations
  const t = await getTranslations();

  return (
    <Sidebar side={locale === "ar" ? "right" : "left"} variant="sidebar" className="w-[300px]">
      {/* Content */}
      <SidebarContent>
        {/* Group  */}
        <SidebarGroup className="p-8 flex flex-col items-center justify-between min-h-screen bg-white dark:bg-zinc-800">
          {/* Group label */}
          <SidebarGroupLabel className="sr-only">{t("links")}</SidebarGroupLabel>

          {/* Group content */}
          <SidebarGroupContent className="space-y-6">
            {/* Header */}
            <SidebarHeader className="flex gap-6 flex-col items-center justify-center">
              {/* Image */}
              <Image width={120} height={112} src={logo} alt="Flower app logo" />

              {/* Button */}
              <Button className="font-semibold">
                <div>
                  <Flower className="!w-[25px] !h-[25px]" />
                </div>
                {t("preview-website")}
              </Button>
            </SidebarHeader>

            {/* Menu */}
            <SidebarMenu>
              {/* Links */}
              <SidebarLinks />
            </SidebarMenu>
          </SidebarGroupContent>

          {/* Footer */}
          <SidebarFooter>
            {/* User Dropdown Menu */}
            <UserDropdownMenu />
          </SidebarFooter>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
