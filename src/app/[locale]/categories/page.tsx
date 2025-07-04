import { Suspense } from "react";
import CategoriesList from "./_components/categories-list";

export default function page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CategoriesList />
    </Suspense>
  );
}
