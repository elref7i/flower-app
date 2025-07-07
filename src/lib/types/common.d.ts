<<<<<<< HEAD
import { Locale } from "next-intl";
import { ReactNode } from "react";

declare type RouteProps = {
  params: { locale: Locale };
  searchParams: SearchParams;
};
declare type LayoutProps = {
  children: ReactNode;
} & Pick<RouteProps, "params">;
=======
declare type Props = {
    params: { id: string }
}
>>>>>>> fcad3a7e8e9e2d2e86ef82d952b485a29b1483d7
