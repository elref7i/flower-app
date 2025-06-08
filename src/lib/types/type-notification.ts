// components/notifications/utils/types.ts
export interface NotificationItemProps {
  notification: Notification;
  onDelete: (id: string) => Promise<void>;
  onMarkAsRead: (id: string) => Promise<void>;
}

export interface NotificationControlsProps {
  unreadCount: number;
  onMarkAllAsRead: () => Promise<void>;
  onClearAll: () => Promise<void>;
  isMarkingAllRead: boolean;
  isClearingAll: boolean;
}

export interface NotificationListProps {
  notifications: Notification[];
  unreadCount: number;
  isLoading: boolean;
  isInitialLoading: boolean;
  hasNextPage: boolean;
  error: any;
  onFetchNextPage: () => void;
  onRemoveNotification: (id: string) => Promise<void>;
  onMarkAsRead: (id: string) => Promise<void>;
  onMarkAllAsRead: () => Promise<void>;
  onClearAll: () => Promise<void>;
}
export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  type: string;
}

export interface NotificationResponse {
  data: Notification[];
  hasMore: boolean;
  nextPage: number | null;
  total: number;
}
export interface UseInfiniteNotificationsReturn {
  data: Notification[];
  isLoading: boolean;
  isInitialLoading: boolean;
  hasNextPage: boolean;
  error: string | null;
  fetchNextPage: () => Promise<void>;
  removeNotification: (id: string) => Promise<void>;
  markAllNotificationsAsRead: () => Promise<void>;
  markAsRead: (id: string) => Promise<void>;
  refetch: () => Promise<void>;
}
export interface NotificationPage {
  data: Notification[];
  nextPage?: number;
}
