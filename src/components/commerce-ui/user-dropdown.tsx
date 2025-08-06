import {
  ChevronDown,
  User,
  MapPin,
  Package,
  LayoutDashboard,
  LogOut,
  TypeIcon as type,
  LucideIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  className?: string;
  href: string;
}

interface UserDropdownProps {
  firstName?: string;
  lastName?: string;
  role?: string;
}

export default function UserDropdown({ firstName, lastName, role }: UserDropdownProps) {
  // Array of menu items

  const menuItems: MenuItem[] = [
    {
      id: "profile",
      label: "My Profile",
      icon: User,
      href: "#",
      className:
        "flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-100 hover:bg-gray-50 dark:hover:bg-zinc-600 rounded-md cursor-pointer",
    },
    {
      id: "addresses",
      label: "My Addresses",
      icon: MapPin,
      href: "#",
      className:
        "flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-100 hover:bg-gray-50 dark:hover:bg-zinc-600 rounded-md cursor-pointer",
    },
    {
      id: "orders",
      label: "My Orders",
      icon: Package,
      href: "#",
      className:
        "flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-100 hover:bg-gray-50 dark:hover:bg-zinc-600 rounded-md cursor-pointer",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "#",
      className:
        "flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-100 hover:bg-gray-50 dark:hover:bg-zinc-600 rounded-md cursor-pointer",
    },
    {
      id: "logout",
      label: "Log out",
      icon: LogOut,
      href: "#",
      className:
        "flex items-center gap-3 mt-2 px-3 py-2 text-sm text-gray-700 dark:text-zinc-100 hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-md cursor-pointer border-2 border-blue-200 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-900/20",
    },
  ];

  const renderMenuItem = (item: MenuItem, index: number) => {
    const isDashboard = item.id === "dashboard";
    const IconComponent = item.icon;

    return (
      <div key={item.id}>
        {/* Add separator before dashboard */}
        {isDashboard && <DropdownMenuSeparator className="my-0 bg-gray-200 dark:bg-zinc-600" />}

        {role === "user" && item.id === "dashboard" ? (
          ""
        ) : (
          <Link href={item.href}>
            <DropdownMenuItem className={item.className}>
              <IconComponent className="h-4 w-4" />
              {item.label}
            </DropdownMenuItem>
          </Link>
        )}

        {/* Add separator after dashboard */}
        {isDashboard && <DropdownMenuSeparator className="my-0 bg-gray-200 dark:bg-zinc-600" />}
      </div>
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="w-fit items-center relative text-maroon-500 dark:text-pink-200 px-3 py-2 text-sm font-medium"
        >
          <span className="text-[12px] text-zinc-500 absolute -top-[1px] start-3">Hello</span>
          Welcome {firstName}
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 bg-white dark:bg-zinc-700 shadow-lg rounded-lg p-2"
        align="end"
        sideOffset={8}
      >
        <div className="px-3 py-2 mb-2">
          <p className="font-semibold text-sm text-maroon-500 dark:text-pink-200">
            {firstName} {lastName}
          </p>
        </div>

        <DropdownMenuSeparator className="my-1 bg-gray-200 dark:bg-zinc-600" />

        {menuItems.map((item, index) => renderMenuItem(item, index))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
