
import { getProductById } from "@/lib/api/products.api";
import { useQuery } from "@tanstack/react-query";

export default function useGetProductDetails(id: string) {
    const { data: product, isLoading, isError } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductById(id)
    })

    return { product, isLoading, isError }
}

