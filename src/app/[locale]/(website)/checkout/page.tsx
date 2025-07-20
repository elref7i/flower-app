import { getUserAddressesAction } from "./_actions/get-user-addresses.action";
import { CheckoutProvider } from "@/lib/context/checkout-context";
import Progressbar from "./_components/progress-bar";
import RenderSteps from "./_components/steppages";

export default async function Page() {
  const addresses = await getUserAddressesAction();
  // console.log("add page", addresses);

  return (
    <section className=" ms-3   ">
      <CheckoutProvider>
        <RenderSteps addresses={addresses} />
      </CheckoutProvider>
    </section>
  );
}
