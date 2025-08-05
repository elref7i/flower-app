import LanguageToggle from "@/components/common/language-toggle";
import { ModeToggle } from "@/components/common/theme-toggle";
import { SidebarAdmin } from "@/components/layout/sidebar-admin/sidebar-admin";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getTranslations } from "next-intl/server";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // Translations
  const t = await getTranslations();

  return (
    <SidebarProvider>
      <SidebarAdmin />
      <div className="space-y-6 w-full">
        <div className="w-full flex justify-between bg-white p-4 shadow-sm dark:bg-zinc-800 dark:shadow-zinc-50">
          <div className="flex items-center gap-1">
            <SidebarTrigger />
            <h2>{t("dashboard")}</h2>
          </div>
          <div>
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
        <div className="container bg-white dark:bg-zinc-900 rounded-md shadow-sm p-5">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
