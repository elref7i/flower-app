import ProductReview from "./_components/product-review";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="container py-10">
        <ProductReview productId={params.id} />
      </div>
    </>
  );
}
