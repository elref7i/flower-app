// components/NotificationDropdown.tsx
'use client';

import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import NotificationHeader from './notificationheader';
import { useUnreadCount } from '../../../../lib/actions/action-header';

export default function NotificationDropdown() {
  // state of open or close dropdown
  const [isOpen, setIsOpen] = useState(false);
  const { unreadCount } = useUnreadCount();

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen} >
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute top-1 right-1 text-xs px-1.5 py-0.5 rounded-full bg-red-500 text-white">
              {unreadCount > 99 ? '99+' : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-red-600">
        <NotificationHeader />
        {/* You can map notifications here */}
        <p className="text-sm text-muted-foreground mt-2">No new notifications.</p>
      </PopoverContent>
    </Popover>
  );
}
