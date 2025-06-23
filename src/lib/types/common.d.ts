import { Locale } from "next-intl";
import { ReactNode } from "react";

declare type SearchParams = string | string[] | undefined;

declare type RouteProps = {
  param: { locale: Locale };
  searchParams: SearchParams;
};
declare type LayoutProps = {
  childrem: ReactNode;
} & Pick<RouteProps, "param">;
