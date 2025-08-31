import Image from "next/image";
import { User, LogOut, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import getLoggeduser from "@/lib/api/user.api";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export async function UserDropdownMenu() {
  // Translations
  const t = await getTranslations();

  // Fetch the logged user data
  const profileData = await getLoggeduser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className=" w-full">
        {/* Button */}
        <Button
          variant="ghost"
          className="flex items-center gap-3 p-3 h-auto hover:bg-zinc-200 hover:dark:bg-zinc-700"
        >
          {/* Profile Image and User Info */}
          <Suspense fallback={<div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse" />}>
            {/* Profile Image */}
            <Avatar className="relative size-[54px] rounded-full bg-gray-600">
              <AvatarImage
                src={profileData.user.photo || "/placeholder.svg"}
                alt={profileData?.user.firstName}
              />
              <AvatarFallback className="font-bold text-3xl bg-maroon-400 text-white">
                {profileData.user.firstName.slice(0, 1).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            {/* User Info */}
            <div className="flex-1 text-left w-[142px]">
              {/* Name */}
              <div className="font-bold text-sm line-clamp-2">
                {`${profileData.user.firstName} ${profileData.user.lastName}`}
              </div>

              {/* Email */}
              <div className="text-[12px] text-gray-400 line-clamp-1">{profileData.user.email}</div>
            </div>

            {/* More Options Icon */}
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </Suspense>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 p-0 bg-white dark:bg-zinc-700" align="end" side="bottom">
        {/* User Info */}
        <div className="px-4 py-3 border-b-2 border-slate-100 dark:border-slate-500">
          {/* Name user */}
          <h3 className="font-bold text-sm text-maroon-700 dark:text-maroon-500">
            {profileData.user.firstName} {profileData.user.lastName}
          </h3>
        </div>

        {/* Account Option */}
        <DropdownMenuItem
          className="flex border-b-2 border-slate-100 dark:border-slate-500 items-center gap-3 px-4 py-3 cursor-pointer  hover:bg-slate-100 hover:dark:bg-zinc-600"
          // onClick={onAccountClick}
        >
          <User className="w-5 h-5" />
          <span>{t("account")}</span>
        </DropdownMenuItem>

        {/* Logout Option */}
        <DropdownMenuItem
          className="flex items-center gap-3 px-4 py-3 cursor-pointer  hover:bg-slate-100 hover:dark:bg-zinc-600  hover:text-red-600"
          // onClick={onLogoutClick}
        >
          <LogOut className="w-5 h-5" />
          <span>{t("log-out")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
