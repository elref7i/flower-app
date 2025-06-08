'use server';

import { BASE_URL, JWT_TOKEN } from './config';

export async function getUnreadCount(): Promise<number> {
  try {
    const response = await fetch(`${BASE_URL}/notifications/unread-count`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `Failed to fetch unread count: ${response.status}`);
    }

    const result = await response.json();
    return result.count || result.unreadCount || 0;

  } catch (error) {
    console.error('Error fetching unread count:', error);
    return 0;
  }
}
