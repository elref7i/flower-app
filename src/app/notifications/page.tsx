// app/notifications/page.tsx

import React from 'react';
import NotificationHeader from '../features/notifications/component/notificationheader';
import { Italic } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"
import ToggleExample from './toglepage';
export default function NotificationsPage(currentPage: number, p0: number) {
  return (
    <main className="p-6">
   <ToggleExample/>
   
    </main>
  );
}




