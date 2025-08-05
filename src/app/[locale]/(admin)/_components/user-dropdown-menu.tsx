import Image from "next/image";
import { User, LogOut, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";
import { JSON_HEADER } from "@/lib/constants/api.constants";
import { Suspense } from "react";
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

export async function UserDropdownMenu() {
  // Fetch the logged user data
  const profileData = await getLoggeduser();

  console.log("profileData", profileData.user.firstName);
  // Fetch data

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Button */}
        <Button
          variant="ghost"
          className="flex items-center gap-3 p-3 h-auto hover:bg-zinc-200 hover:dark:bg-zinc-700"
        >
          <Suspense fallback={<div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse" />}>
            <div className="relative size-[54px] rounded-full bg-gray-600">
              {profileData?.user ? (
                <Image
                  src={profileData?.user.photo || "/placeholder.svg"}
                  alt={profileData.user.firstName}
                  fill
                  className=" object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-600">
                  <User className="w-5 h-5 text-gray-300" />
                </div>
              )}
            </div>

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
          <h3 className="font-bold text-sm text-maroon-700 dark:text-maroon-500">
            {profileData.user.firstName} {profileData.user.lastName}
          </h3>
        </div>

        {/* Account and Logout Options */}
        <DropdownMenuItem
          className="flex border-b-2 border-slate-100 dark:border-slate-500 items-center gap-3 px-4 py-3 cursor-pointer  hover:bg-slate-100 hover:dark:bg-zinc-600"
          // onClick={onAccountClick}
        >
          <User className="w-5 h-5" />
          <span>Account</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center gap-3 px-4 py-3 cursor-pointer  hover:bg-slate-100 hover:dark:bg-zinc-600  hover:text-red-600"
          // onClick={onLogoutClick}
        >
          <LogOut className="w-5 h-5" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
