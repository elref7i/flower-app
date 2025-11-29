import { useQuery } from "@tanstack/react-query";
import { getAllStatistics } from "@/lib/api/all-statistics";

interface OrderStatus {
  _id: string;
  count: number;
}

interface StatisticsResponse {
  statistics: {
    orders: {
      ordersByStatus: OrderStatus[];
    };
  };
}

export default function useGetStatistics() {
  const query = useQuery<StatisticsResponse>({
    queryKey: ["statistics"],
    queryFn: getAllStatistics,
  });

  const isValidData =
    query.data &&
    "statistics" in query.data &&
    query.data.statistics?.orders?.ordersByStatus;

console.log("QUERY DATA:", query.data)
console.log("IS VALID DATA:", query.data && "statistics" in query.data)

  return {
    ...query,
    isValidData,
  };
}
