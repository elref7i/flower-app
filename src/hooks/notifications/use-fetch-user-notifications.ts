import { fetchUserNotification } from "@/lib/api/notifications.api";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useFetchUserNotifications() {
  const {
    data: payload,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["Notifications"],
    queryFn: async ({ pageParam }) => {
      return await fetchUserNotification({ pageParam });
    },
    initialPageParam: 1,
    getNextPageParam: (LastPage) => {
      if (LastPage.metadata.currentPage === LastPage.metadata.totalPages) return undefined;
      return LastPage.metadata.currentPage + 1;
    },
  });

  return {
    payload,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
}
