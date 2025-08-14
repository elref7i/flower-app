"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, usePathname } from "@/i18n/navigation";
import { useMemo } from "react";

import { notFound } from "next/navigation";

export default function DashboardBreadcrumb() {
  const pathName = usePathname();

  const validRoutes = useMemo(
    () => [
      "/dashboard",
      "/dashboard/categories",
      "/dashboard/occasions",
      "/dashboard/products",
      // Add your valid dashboard routes here
    ],
    [],
  );

  // Check if current path is valid
  const isValidRoute = useMemo(() => {
    return validRoutes.some(
      (route) => pathName === route || (pathName.startsWith(route + "/") && route !== "/dashboard"),
    );
  }, [pathName, validRoutes]);

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

  // Return NotFound if route is invalid
  if (pathName.startsWith("/dashboard") && !isValidRoute) {
    notFound();
  }

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
