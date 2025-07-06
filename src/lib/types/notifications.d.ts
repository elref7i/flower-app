declare type MarkAllNotificationsReadResponse = {
  message: string;
  modifiedCount: number;
  unreadCount: number;
};

declare type UnreadNotificationsReadResponse = {
  message: string;
  unreadCount: number;
};

declare type ClearAllNotificationsResponse = {
  message: string;
  deletedCount: number;
};
