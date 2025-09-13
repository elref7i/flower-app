import React from "react";
import { Suspense } from "react";
import CategoriesList from "./_components/categories-list";
import CategoriesSkeleton from "./_components/categories-skeleton";
import SearchForm from "./_components/search-form";
export default async function Page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return (
    <div className="container">
      {/*search input*/}
      <SearchForm />
      {/*category list*/}
      <Suspense fallback={<CategoriesSkeleton />}>
        <CategoriesList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
