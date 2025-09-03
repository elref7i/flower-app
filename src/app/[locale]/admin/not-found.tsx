import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import Custom404 from "@/components/commerce-ui/404";

export default function AdminNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
      <Custom404 />
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Admin Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          The admin page you're looking for doesn't exist. Please check the URL or navigate to a
          valid admin page.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/admin/dashboard" className={cn(buttonVariants({ variant: "default" }))}>
            Go to Dashboard
          </Link>
          <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
