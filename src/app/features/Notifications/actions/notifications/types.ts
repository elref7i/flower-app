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
