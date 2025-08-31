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

  // Split path into segments
  const pathSegments = useMemo(() => {
    return pathName.split("/").filter((segment) => segment !== "");
  }, [pathName]);

  // Build breadcrumb items dynamically
  const breadcrumbItems = useMemo(() => {
    return pathSegments.map((segment, index) => ({
      path: segment,
      href:
        index === pathSegments.length - 1 ? null : `/${pathSegments.slice(0, index + 1).join("/")}`,
      isLast: index === pathSegments.length - 1,
    }));
  }, [pathSegments]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <div key={`${item.path}-${index}`} className="flex items-center">
            <BreadcrumbItem>
              {item.isLast ? (
                <BreadcrumbPage className="capitalize">{item.path}</BreadcrumbPage>
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
