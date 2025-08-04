import { ModeToggle } from "@/components/common/theme-toggle";
import { SidebarAdmin } from "@/components/layout/sidebar-admin/sidebar-admin";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarAdmin />
      <div className="space-y-6 w-full">
        <div className="w-full flex justify-between bg-white  px-4 py-6 shadow-sm dark:bg-zinc-800 dark:shadow-zinc-50">
          <div className="flex items-center gap-1">
            <SidebarTrigger />
            <h2>Dashboard</h2>
          </div>
          <ModeToggle />
        </div>
        <div className="container bg-white dark:bg-zinc-900 rounded-md shadow-sm p-5">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
