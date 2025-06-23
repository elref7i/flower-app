import { Locale } from "next-intl";
import { ReactNode } from "react";

declare type RouteProps = {
  param: { locale: Locale };
  searchParams: SearchParams;
};
declare type LayoutProps = {
  childrem: ReactNode;
} & Pick<RouteProps, "param">;
