import { Locale } from "next-intl";
import { ReactNode } from "react";

declare type RouteProps = {
  params: { locale: Locale };
  searchParams: SearchParams;
};
declare type LayoutProps = {
  children: ReactNode;
} & Pick<RouteProps, "params">;
