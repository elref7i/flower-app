
'use server';

import { NotificationResponse } from '../types/type-notification';
import { BASE_URL, JWT_TOKEN } from '../constans/notification-constant'; 

export async function markAllNotificationsAsRead() {
  try {
    const response = await fetch(`${BASE_URL}/notifications/mark-all-read`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `Failed to mark all as read: ${response.status}`);
    }

    return { success: true };

  } catch (error) {
    console.error('Error marking all notifications as read:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to mark notifications as read');
  }
}