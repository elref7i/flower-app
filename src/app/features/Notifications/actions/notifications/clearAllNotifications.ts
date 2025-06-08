"use server"
import { NotificationResponse } from './types';
import { BASE_URL, JWT_TOKEN } from './config';
export async function clearAllNotifications(id: any) {
  try {
    const response = await fetch(`${BASE_URL}/notifications/clear-all`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `Failed to clear all notifications: ${response.status}`);
    }

    return { success: true };

  } catch (error) {
    console.error('Error clearing all notifications:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to clear notifications');
  }
}