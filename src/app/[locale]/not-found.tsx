import authOptions from "@/auth-options";
import LanguageToggle from "@/components/common/language-toggle";
import { ModeToggle } from "@/components/common/theme-toggle";
import Footer from "@/components/layout/footer";
import MainHeader from "@/components/layout/header/components/main-header";
import NavigationHeader from "@/components/layout/header/components/navigation-header";
import { SidebarAdmin } from "@/components/layout/sidebar-admin/sidebar-admin";
import { buttonVariants } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";
import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";
import DashboardBreadcrumb from "../../components/commerce-ui/dashboard-breadcrumb";
import Custom404 from "@/components/commerce-ui/404";

export default async function NotFoundPage() {
  const t = await getTranslations();
  const session = await getServerSession(authOptions);

  return session?.user.role === "admin" ? (
    <SidebarProvider>
      <SidebarAdmin />
      <div className="space-y-6 w-full">
        <div className="w-full flex justify-between bg-white p-4 shadow-sm dark:bg-zinc-800 dark:shadow-zinc-50">
          <div className="flex items-center gap-1">
            <SidebarTrigger />
            <DashboardBreadcrumb />
            {/* <h2>{t("dashboard")}</h2> */}
          </div>
          <div>
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
        <div className="container bg-white dark:bg-zinc-900 rounded-md shadow-sm p-5 min-h-[80vh]">
          <Custom404 />
        </div>
      </div>
    </SidebarProvider>
  ) : (
    <main>
      {/* Main Header */}
      <MainHeader />

      {/* Navigation Header */}
      <NavigationHeader />
      <div className="flex flex-col gap-8 min-h-screen items-center justify-center">
        {/* Headline */}
        <h1 className="text-red-500 font-bold text-9xl">404</h1>

        {/* Description */}
        <p>{t("not-found-page")}.</p>

        {/* Action */}
        <Link href="/" className={cn(buttonVariants({ variant: "link" }))}>
          {t("go-to-homepage")}
        </Link>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
