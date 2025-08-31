"use client";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";
import { CalendarHeart, ClipboardList, LayoutDashboard, Package } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SidebarLinks() {
  // Hooks
  const currentPath = usePathname();

  // Translations
  const t = useTranslations();

  // Menu items.
  const items = [
    {
      title: `${t("overview")}`,
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: `${t("categories")}`,
      url: "/dashboard/categories",
      icon: ClipboardList,
    },
    {
      title: `${t("occasions-title")}`,
      url: "/dashboard/occasions",
      icon: CalendarHeart,
    },
    {
      title: `${t("products")}`,
      url: "/dashboard/products",
      icon: Package,
    },
  ];

  return items.map((item) => (
    <SidebarMenuItem
      key={item.title}
      className={cn(
        currentPath === item.url ? "bg-maroon-50 text-maroon-600 hover:text-maroon-700" : "",
        "px-2 py-[10px] rounded-[10px] ",
      )}
    >
      <SidebarMenuButton asChild>
        <Link className={cn("text-xl font-bold gap-[10px] flex items-center")} href={item.url}>
          <item.icon className="!w-[25px] !h-[25px]" />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ));
}
