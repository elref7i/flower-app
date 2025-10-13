import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";
import { Heart } from "lucide-react";

export default function WishlistIcon() {
  return (
    <Link href="/wishlist" className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
      <Heart width={24} height={24} />
    </Link>
  );
}
