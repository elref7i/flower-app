"use client";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";
import { CalendarHeart, ClipboardList, LayoutDashboard, Package } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function SidebarLinks() {
  // Hooks
  const currentPath = usePathname();

  // Translations
  const t = useTranslations();

  const items = useMemo(
    () => [
      {
        title: t("overview"),
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: t("categories"), // Fixed typo: "cateories" -> "categories"
        url: "/dashboard/categories", // Fixed URL as well
        icon: ClipboardList,
      },
      {
        title: t("occasions-title"),
        url: "/dashboard/occasions",
        icon: CalendarHeart,
      },
      {
        title: t("products"),
        url: "/dashboard/products",
        icon: Package,
      },
    ],
    [t],
  );

  // Render Items
  const renderedItems = useMemo(
    () =>
      items.map((item) => {
        const isActive = currentPath === item.url;
        const IconComponent = item.icon;

        return (
          <SidebarMenuItem
            key={item.url} // Using URL as key is better than title for stability
            className={cn(
              "px-2 py-[10px] rounded-[10px] transition-colors duration-200",
              isActive && "bg-maroon-50 text-maroon-600 hover:text-maroon-700",
            )}
          >
            <SidebarMenuButton asChild>
              <Link
                className="text-xl font-bold gap-[10px] flex items-center"
                href={item.url}
                aria-current={isActive ? "page" : undefined}
              >
                <IconComponent className="!w-[25px] !h-[25px]" />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      }),
    [items, currentPath],
  );

  return renderedItems;
}
