import { getCartItems } from "@/lib/api/cart";
import RelatedProducts from "./_components/related-product/related-product";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";
import EmptyCart from "./_components/empty-cart/empty-cart";

export default async function Layout({
  summery,
  cart,
}: {
  summery: React.ReactNode;
  cart: React.ReactNode;
}) {
  const token = await getTokenFromCookies();

  const CartInfo = await getCartItems();
  return (
    <main className=" mx-20 mt-16 mb-40">
      {token ? (
        // If user logged in
        <div>
          {/* Parallel routes  */}
          <div className="flex gap-10 mb-14">
            <section className="flex-1">{cart}</section>

            {/* If there are items in cart will render summery route  */}
            {!!CartInfo.numOfCartItems && <section className="w-[460px]">{summery}</section>}
          </div>
          <RelatedProducts />
        </div>
      ) : (
        // If user not logged in
        <>
          <EmptyCart loggedIn={false} />
        </>
      )}
    </main>
  );
}
