"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, usePathname } from "@/i18n/navigation";
import { useMemo } from "react";

export default function DashboardBreadcrumb() {
  const pathName = usePathname();

  // Memoize the path segments to avoid recalculation on every render
  const pathSegments = useMemo(() => {
    return pathName.split("/").filter((segment) => segment !== "");
  }, [pathName]);

  // Memoize breadcrumb items
  const breadcrumbItems = useMemo(() => {
    // Special case for dashboard root
    if (pathName === "/dashboard") {
      return [
        { path: "dashboard", href: "/dashboard", isLast: false },
        { path: "overview", href: "", isLast: true },
      ];
    }

    return pathSegments.map((segment, index) => ({
      path: segment,
      href:
        index === pathSegments.length - 1 ? null : `/${pathSegments.slice(0, index + 1).join("/")}`,
      isLast: index === pathSegments.length - 1,
    }));
  }, [pathName, pathSegments]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <div key={`${item.path}-${index}`} style={{ display: "contents" }}>
            <BreadcrumbItem>
              {item.isLast ? (
                <BreadcrumbPage className="capitalize">
                  {item.path === "overview" ? "OverView" : item.path}
                </BreadcrumbPage>
              ) : (
                <Link href={item.href || ""} className="capitalize">
                  {item.path}
                </Link>
              )}
            </BreadcrumbItem>
            {!item.isLast && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
