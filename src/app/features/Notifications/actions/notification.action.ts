// // lib/actions/notification.action.ts
// 'use server';

// const JWT_TOKEN = process.env.NEXT_PUBLIC_JWT_TOKEN || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjg0MzA4YmNhOGJjYTMwN2Y5YzgzYzk0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NDkzMDM2Mjh9.C7m94lnVBYcj2-WtGMKbPW7HwnhXxPQlcz_XZi2B6AE";
// const BASE_URL = 'https://flower.elevateegy.com/api/v1';

// // Types
// export interface Notification {
//   id: string;
//   title: string;
//   message: string;
//   timestamp: string;
//   isRead: boolean;
//   type: string;
// }

// export interface NotificationResponse {
//   data: Notification[];
//   hasMore: boolean;
//   nextPage: number | null;
//   total: number;
// }

// export interface UnreadCountResponse {
//   count: number;
// }

// // Get User Notifications with Pagination
// export async function getUserNotifications(page: number = 0, limit: number = 10) {
//   try {
//     const response = await fetch(`${BASE_URL}/notifications/user?page=${page}&limit=${limit}`, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${JWT_TOKEN}`,
//         'Content-Type': 'application/json',
//       },
//       cache: 'no-store', // Ensure fresh data
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => null);
//       throw new Error(errorData?.message || `Failed to fetch notifications: ${response.status}`);
//     }

//     const result = await response.json();
    
//     // Transform the response to match our expected format
//     return {
//       data: result.notifications || result.data || [],
//       hasMore: result.hasMore || (result.currentPage < result.totalPages),
//       nextPage: result.hasMore ? page + 1 : null,
//       total: result.total || 0,
//     } as NotificationResponse;

//   } catch (error) {
//     console.error('Error fetching notifications:', error);
//     throw new Error(error instanceof Error ? error.message : 'Failed to load notifications');
//   }
// }

// // Get Unread Count
// export async function getUnreadCount() {
//   try {
//     const response = await fetch(`${BASE_URL}/notifications/unread-count`, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${JWT_TOKEN}`,
//         'Content-Type': 'application/json',
//       },
//       cache: 'no-store',
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => null);
//       throw new Error(errorData?.message || `Failed to fetch unread count: ${response.status}`);
//     }

//     const result = await response.json();
//     return result.count || result.unreadCount || 0;

//   } catch (error) {
//     console.error('Error fetching unread count:', error);
//     return 0; // Return 0 on error to prevent UI breaking
//   }
// }

// // Delete Notification
// export async function deleteNotification(notification_id: string) {
//   try {
//     const response = await fetch(`${BASE_URL}/notifications/${notification_id}`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${JWT_TOKEN}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => null);
//       throw new Error(errorData?.message || `Failed to delete notification: ${response.status}`);
//     }

//     return { success: true };

//   } catch (error) {
//     console.error('Error deleting notification:', error);
//     throw new Error(error instanceof Error ? error.message : 'Failed to delete notification');
//   }
// }

// // Mark All Notifications as Read
// export async function markAllNotificationsAsRead() {
//   try {
//     const response = await fetch(`${BASE_URL}/notifications/mark-all-read`, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${JWT_TOKEN}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => null);
//       throw new Error(errorData?.message || `Failed to mark all as read: ${response.status}`);
//     }

//     return { success: true };

//   } catch (error) {
//     console.error('Error marking all notifications as read:', error);
//     throw new Error(error instanceof Error ? error.message : 'Failed to mark notifications as read');
//   }
// }

// // Mark Single Notification as Read
// export async function markNotificationAsRead(notification_id: string) {
//   try {
//     const response = await fetch(`${BASE_URL}/notifications/${notification_id}/mark-read`, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${JWT_TOKEN}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => null);
//       throw new Error(errorData?.message || `Failed to mark notification as read: ${response.status}`);
//     }

//     return { success: true };

//   } catch (error) {
//     console.error('Error marking notification as read:', error);
//     throw new Error(error instanceof Error ? error.message : 'Failed to mark notification as read');
//   }
// }

// // Clear All Notifications
// export async function clearAllNotifications() {
//   try {
//     const response = await fetch(`${BASE_URL}/notifications/clear-all`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${JWT_TOKEN}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => null);
//       throw new Error(errorData?.message || `Failed to clear all notifications: ${response.status}`);
//     }

//     return { success: true };

//   } catch (error) {
//     console.error('Error clearing all notifications:', error);
//     throw new Error(error instanceof Error ? error.message : 'Failed to clear notifications');
//   }
// }