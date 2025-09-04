import { Link } from "@/i18n/navigation";

export default function page() {
  return (
    <div className="bg-zinc-100 flex flex-col gap-5">
      <p className="text-red-700 text-2xl"> Summery</p>
      <Link href="/cart/checkout">Checkout</Link>
      <Link href="/cart">Cart</Link>
    </div>
  );
}
