import Image from "next/image";
import { User, LogOut, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export async function UserDropdownMenu() {
  // Fetch data
  const user = {
    name: "Jonathan Adrian",
    email: "user-email@example.com",
    avatar: "",
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Button */}
        <Button
          variant="ghost"
          className="flex items-center gap-3 p-3 h-auto hover:bg-zinc-200 hover:dark:bg-zinc-700"
        >
          <div className="relative size-[54px] rounded-full overflow-hidden bg-gray-600">
            {user.avatar ? (
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
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
          <div className="flex-1 text-left">
            {/* Name */}
            <div className="font-bold">{user.name}</div>

            {/* Email */}
            <div className="text-sm text-gray-400">{user.email}</div>
          </div>

          {/* More Options Icon */}
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 p-0 bg-white dark:bg-zinc-700" align="end" side="bottom">
        {/* User Info */}
        <div className="px-4 py-3 border-b-2 border-slate-100 dark:border-slate-500">
          <h3 className="font-bold text-sm text-maroon-700 dark:text-maroon-500 cursor-pointer">
            {user.name}
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
