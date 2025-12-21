import ProductReview from "./_components/product-review";
import ProductDetails from "./_components/product-details";
import RelatedProducts from "../../cart/_components/related-product/related-product";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <main className="container mt-20 mb-96 flex flex-col gap-14">
            <ProductDetails productId={params.id} />

            <ProductReview productId={params.id} />
            <RelatedProducts />
        </main>
    );
}
