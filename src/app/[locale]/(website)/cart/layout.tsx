import { getCartItems } from "@/lib/api/cart";
import RelatedProducts from "./@cart/_components/related-product/related-product";

export default async function Layout({
  summery,
  cart,
}: {
  summery: React.ReactNode;
  cart: React.ReactNode;
}) {
  const { numOfCartItems }: CartInfo = await getCartItems();
  return (
    <main className=" mx-20 mt-16 mb-40">
      {/* Parallel routes */}
      <div className="flex gap-10 mb-14">
        <section className="flex-1">{cart}</section>

        {/* If there are items in cart will render summery route */}
        {!!numOfCartItems && <section className="w-[460px]">{summery}</section>}
      </div>
      <RelatedProducts />
    </main>
  );
}
