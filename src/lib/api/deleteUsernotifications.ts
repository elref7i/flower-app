"use server"
import { NotificationResponse } from '../types/type-notification';
import { BASE_URL, JWT_TOKEN } from '../constans/notification-constant';
export async function deleteNotification(notification_id: string) {
  try {
    const response = await fetch(`${BASE_URL}/notifications/${notification_id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `Failed to delete notification: ${response.status}`);
    }

    return { success: true };

  } catch (error) {
    console.error('Error deleting notification:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to delete notification');
  }
}
