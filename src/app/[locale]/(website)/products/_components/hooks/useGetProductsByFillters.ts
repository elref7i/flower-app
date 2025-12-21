import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsByFilters } from "@/lib/api/products.api";

interface UseProductsParams {
    category?: string;
    occasion?: string;
    rateAvg?: number;
    priceGte?: number;
    priceLte?: number;
    limit?: number;
}

export default function useGetProductsByFilters({
    category,
    occasion,
    rateAvg,
    priceGte,
    priceLte,
    limit = 12,
}: UseProductsParams) {
    const [page, setPage] = useState(1);

    const { data: payload, isLoading, isError } = useQuery({
        queryKey: ["products", page, category, occasion, rateAvg, priceGte, priceLte, limit],
        queryFn: () =>
            getAllProductsByFilters({
                pageParam: page,
                category,
                occasion,
                rateAvg,
                priceGte,
                priceLte,
                limit,
            }),
        staleTime: 5000,
    });

    const products = payload?.products || [];
    const metaData = payload?.metadata;

    return {
        products,
        metaData,
        page,
        setPage,
        isLoading,
        isError,
    };
}
