"use client";
import {
  Calendar,
  CalendarHeart,
  ClipboardList,
  Flower,
  Home,
  Inbox,
  LayoutDashboard,
  Package,
  Search,
  Settings,
} from "lucide-react";

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
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserDropdownMenu } from "@/app/[locale]/(admin)/_components/user-dropdown-menu";

// Menu items.
const items = [
  {
    title: "overview",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Catergories",
    url: "/dashboard/categories",
    icon: ClipboardList,
  },
  {
    title: "Occasions",
    url: "/dashboard/occasions",
    icon: CalendarHeart,
  },
  {
    title: "Products",
    url: "/dashboard/products",
    icon: Package,
  },
];

export function SidebarAdmin() {
  const user = {
    name: "Jonathan Adrian",
    email: "user-email@example.com",
    avatar: "",
  };

  const handleAccountClick = () => {
    console.log("Account clicked");
    // Navigate to account page or open account modal
  };

  const handleLogoutClick = () => {
    console.log("Logout clicked");
    // Handle logout logic
  };
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="p-8 flex flex-col items-center justify-between min-h-screen bg-white dark:bg-zinc-800">
          <SidebarGroupLabel className="sr-only">Admin</SidebarGroupLabel>
          <SidebarGroupContent className="space-y-6">
            <SidebarHeader className="flex gap-6 flex-col items-center justify-center">
              <Image width={120} height={112} src={logo} alt="Flower app logo" />
              <Button className="font-semibold">
                <div>
                  <Flower className="!w-[25px] !h-[25px]" />
                </div>
                Prevview website
              </Button>
            </SidebarHeader>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="hover:bg-none px-2 py-[10px] dark:bg-red-700 rounded-[10px]"
                >
                  <SidebarMenuButton asChild>
                    <Link
                      className="text-xl font-bold gap-[10px] flex items-center"
                      href={item.url}
                    >
                      <item.icon className="!w-[25px] !h-[25px]" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarFooter>
            <UserDropdownMenu
              user={user}
              onAccountClick={() => console.log("Account clicked")}
              onLogoutClick={() => console.log("Logout clicked")}
            />
          </SidebarFooter>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
