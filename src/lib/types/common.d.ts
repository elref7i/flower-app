<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 81c7cfbceaaf7ee4a07bf075275088b037e2ed82
import { Locale } from "next-intl";
import { ReactNode } from "react";

declare type RouteProps = {
  params: { locale: Locale };
  searchParams: SearchParams;
};
declare type LayoutProps = {
  children: ReactNode;
} & Pick<RouteProps, "params">;
<<<<<<< HEAD
=======
declare type Props = {
    params: { id: string }
}
>>>>>>> fcad3a7e8e9e2d2e86ef82d952b485a29b1483d7
=======
declare type Props = {
    params: { id: string }
}
>>>>>>> 81c7cfbceaaf7ee4a07bf075275088b037e2ed82
