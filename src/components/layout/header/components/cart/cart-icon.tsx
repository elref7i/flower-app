import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getCartItems } from "@/lib/api/cart";
import { cn } from "@/lib/utils/cn";
import { ShoppingCart } from "lucide-react";

export default async function CartIcon() {
  const { numOfCartItems }: CartInfo = await getCartItems();
  return (
    <Link
      href="/cart"
      className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "relative z-0")}
    >
      <ShoppingCart width={24} height={24} />
      <span
        className={cn(
          `flex opacity-0 transition-opacity duration-500 items-center justify-center text-zinc-50 font-medium text-[10px] bg-red-600 rounded-full size-4 absolute z-10 top-1 right-0`,
          numOfCartItems !== 0 && "opacity-100",
        )}
      >
        {numOfCartItems}
      </span>
    </Link>
  );
}
