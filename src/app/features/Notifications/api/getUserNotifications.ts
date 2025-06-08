// Inside a Server Component
import { getUserNotifications } from '../../../features/Notifications/actions/notifications/getUserNotifications'

export default async function NotificationsPage() {
  const { data } = await getUserNotifications();

  
}
