"use client"
// hooks/useNotificationHeader.ts
import { useCallback } from 'react';
import { useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import { NotificationPage, UseInfiniteNotificationsReturn, type Notification } from "../types/type-notification";
import { getUnreadCount } from '../api/getUnreadCount';
import { deleteNotification } from '../api/deleteUsernotifications';
import { markAllNotificationsAsRead } from '../api/markAllNotificationsAsRead';
import { markNotificationAsRead } from '../api/markNotificationAsRead';
import NotificationsPage from '../../app/notifications/page';





export const useInfiniteNotifications = (): UseInfiniteNotificationsReturn => {
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    isInitialLoading,
    hasNextPage,
    error,
    fetchNextPage: queryFetchNextPage,
    refetch: queryRefetch
  } = useInfiniteQuery<NotificationPage>({
    queryKey: ['notifications'],
    queryFn: async ({ pageParam = 0 }) => {
      const result = await NotificationsPage(pageParam, 10);
      return {
        data: Array.isArray(result.data) ? result.data.filter(Boolean) : [],
        nextPage: result.hasMore ? pageParam + 1 : undefined,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0,
  });

  const fetchNextPage = useCallback(async () => {
    await queryFetchNextPage();
  }, [queryFetchNextPage]);

  const refetch = useCallback(async () => {
    await queryRefetch();
  }, [queryRefetch]);

  const removeNotification = useCallback(async (id: string) => {
    try {
      await deleteNotification(id);
      // Update the cache by removing the deleted notification
      queryClient.setQueryData<{ pages: NotificationPage[] }>(['notifications'], (oldData) => {
        if (!oldData) return oldData;
        return {
          pages: oldData.pages.map((page) => ({
            ...page,
            data: page.data.filter((item) => item && item.id !== id)
          }))
        };
      });
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to delete notification');
    }
  }, [queryClient]);

  const markAllAsRead = useCallback(async () => {
    try {
      await markAllNotificationsAsRead();
      // Update the cache by marking all notifications as read
      queryClient.setQueryData<{ pages: NotificationPage[] }>(['notifications'], (oldData) => {
        if (!oldData) return oldData;
        return {
          pages: oldData.pages.map((page) => ({
            ...page,
            data: page.data.map((item) => ({ ...item, isRead: true }))
          }))
        };
      });
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to mark all as read');
    }
  }, [queryClient]);

  const markAsRead = useCallback(async (id: string) => {
    try {
      await markNotificationAsRead(id);
      // Update the cache by marking the specific notification as read
      queryClient.setQueryData<{ pages: NotificationPage[] }>(['notifications'], (oldData) => {
        if (!oldData) return oldData;
        return {
          pages: oldData.pages.map((page) => ({
            ...page,
            data: page.data.map((item) => 
              item.id === id ? { ...item, isRead: true } : item
            )
          }))
        };
      });
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to mark as read');
    }
  }, [queryClient]);

  return {
    data: data?.pages?.flatMap(page => page.data).filter(Boolean) ?? [],
    isLoading,
    isInitialLoading,
    hasNextPage: !!hasNextPage,
    error: error ? (error as Error).message : null,
    fetchNextPage,
    removeNotification,
    markAllNotificationsAsRead: markAllAsRead,
    markAsRead,
    refetch
  };
};

interface UseUnreadCountReturn {
  unreadCount: number;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useUnreadCount = (): UseUnreadCountReturn => {
  const {
    data: unreadCount = 0,
    isLoading,
    error,
    refetch: queryRefetch
  } = useQuery<number>({
    queryKey: ['unreadCount'],
    queryFn: getUnreadCount,
  });

  const refetch = useCallback(async () => {
    await queryRefetch();
  }, [queryRefetch]);

  return {
    unreadCount,
    isLoading,
    error: error ? (error as Error).message : null,
    refetch
  };
};

// Combined hook for notification header functionality
interface UseNotificationHeaderReturn {
  notifications: Notification[];
  unreadCount: number;
  isLoading: boolean;
  isInitialLoading: boolean;
  hasNextPage: boolean;
  error: string | null;
  fetchNextPage: () => Promise<void>;
  removeNotification: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  markAsRead: (id: string) => Promise<void>;
  refetchAll: () => Promise<void>;
}

export const useNotificationHeader = (): UseNotificationHeaderReturn => {
  const {
    data: notifications,
    isLoading: notificationsLoading,
    isInitialLoading,
    hasNextPage,
    error: notificationsError,
    fetchNextPage,
    removeNotification,
    markAllNotificationsAsRead,
    markAsRead,
    refetch: refetchNotifications
  } = useInfiniteNotifications();

  const {
    unreadCount,
    isLoading: unreadLoading,
    error: unreadError,
    refetch: refetchUnreadCount
  } = useUnreadCount();

  const handleMarkAllAsRead = useCallback(async () => {
    await markAllNotificationsAsRead();
    await refetchUnreadCount();
  }, [markAllNotificationsAsRead, refetchUnreadCount]);

  const handleMarkAsRead = useCallback(async (id: string) => {
    await markAsRead(id);
    await refetchUnreadCount();
  }, [markAsRead, refetchUnreadCount]);

  const handleRemoveNotification = useCallback(async (id: string) => {
    await removeNotification(id);
    await refetchUnreadCount();
  }, [removeNotification, refetchUnreadCount]);

  const refetchAll = useCallback(async () => {
    await Promise.all([
      refetchNotifications(),
      refetchUnreadCount()
    ]);
  }, [refetchNotifications, refetchUnreadCount]);

  return {
    notifications,
    unreadCount,
    isLoading: notificationsLoading || unreadLoading,
    isInitialLoading,
    hasNextPage,
    error: notificationsError || unreadError,
    fetchNextPage,
    removeNotification: handleRemoveNotification,
    markAllAsRead: handleMarkAllAsRead,
    markAsRead: handleMarkAsRead,
    refetchAll
  };
};