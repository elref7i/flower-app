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