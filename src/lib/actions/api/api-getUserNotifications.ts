import { NotificationResponse } from '../../types/type-notification';
import { BASE_URL, JWT_TOKEN } from '../../constans/notification-constant';

export async function getUserNotifications(page: number = 0, limit: number = 10): Promise<NotificationResponse> {
  try {
    const response = await fetch(`${BASE_URL}/notifications/user?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `Failed to fetch notifications: ${response.status}`);
    }

    const result = await response.json();
    return {
      data: result.notifications || result.data || [],
      hasMore: result.hasMore || (result.currentPage < result.totalPages),
      nextPage: result.hasMore ? page + 1 : null,
      total: result.total || 0,
    };
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to load notifications');
  }
}
