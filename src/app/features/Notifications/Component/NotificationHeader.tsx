// components/NotificationHeader.tsx
'use client';

import React, { useRef, useCallback, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Bell, Check, MoreHorizontal, BrushCleaning, Trash2 } from 'lucide-react';
import { useNotificationHeader } from '../../../../lib/actions/action-header';
import { type Notification } from '../../../../lib/types/type-notification';
import { clearAllNotifications } from '../../../../lib/api/clearAllNotifications';
import {NotificationSkeleton, skelton} from "./skelton"
// Notification Item Component
interface NotificationItemProps {
  notification: Notification;
  onDelete: (id: string) => Promise<void>;
  onMarkAsRead: (id: string) => Promise<void>;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ 
  notification, 
  onDelete, 
  onMarkAsRead 
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMarkingRead, setIsMarkingRead] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await onDelete(notification.id);
    } catch (error) {
      console.error('Failed to delete notification:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleMarkAsRead = async () => {
    if (notification.isRead) return;
    setIsMarkingRead(true);
    try {
      await onMarkAsRead(notification.id);
    } catch (error) {
      console.error('Failed to mark as read:', error);
    } finally {
      setIsMarkingRead(false);
    }
  };


  return (
    <div 
      className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${
        !notification?.isRead ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
      }`}
      onClick={handleMarkAsRead}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-medium text-gray-900 text-sm">
              {notification?.title}
            </h4>
            {!notification?.isRead && (
              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
            )}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            {notification?.message}
          </p>
     
        </div>
        
        <div className="flex items-center gap-1 flex-shrink-0">
          {!notification?.isRead && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600"
              onClick={(e) => {
                e.stopPropagation();
                handleMarkAsRead();
              }}
              disabled={isMarkingRead}
              title="Mark as read"
            >
              {isMarkingRead ? (
                <div className="w-3 h-3 border border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Check className="h-3 w-3" />
              )}
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
            disabled={isDeleting}
            title="Delete notification"
          >
            {isDeleting ? (
              <div className="w-3 h-3 border border-gray-300 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Trash2 className="h-3 w-3" />
            )}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0"
            title="More options"
          >
            <MoreHorizontal className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Skeleton
<NotificationSkeleton/>

// Main Component
const NotificationHeader: React.FC = () => {
  const {
    notifications,
    unreadCount,
    isLoading,
    isInitialLoading,
    hasNextPage,
    error,
    fetchNextPage,
    removeNotification,
    markAllAsRead,
    markAsRead,
    refetchAll
  } = useNotificationHeader();

  const [isMarkingAllRead, setIsMarkingAllRead] = useState(false);
  const [isClearingAll, setIsClearingAll] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const threshold = 100;
    
    if (scrollHeight - scrollTop - clientHeight < threshold && hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [hasNextPage, isLoading, fetchNextPage]);

  const handleMarkAllAsRead = async () => {
    setIsMarkingAllRead(true);
    try {
      await markAllAsRead();
    } catch (error) {
      console.error('Failed to mark all as read:', error);
    } finally {
      setIsMarkingAllRead(false);
    }
  };

  const handleDeleteAllNotifications = async () => {
    setIsClearingAll(true);
    try {
      await clearAllNotifications();
    } catch (error) {
      console.error('Failed to clear notifications:', error);
    } finally {
      setIsClearingAll(false);
    }
  };

  return (
    // card of notification
    <Card className="max-w-md mx-auto shadow-lg 0">
      <div className="p-4 border-b bg-[#741C21] dark:bg-[so#FFC2D0] rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 dark:bg-[Zinc/zinc-700]">
            <h2 className="text-lg font-semibold text-white">Notifications</h2>
            {/* badge of unreadcount */}
            {unreadCount > 0 && (
              <Badge variant="destructive" className="bg-red-600 text-white text-xs px-2 py-1">
                ({unreadCount})
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          {isClearingAll ? (
            <div className="w-4 h-4 border border-gray-300 border-t-transparent rounded-full animate-spin ml-1 mt-1" />
          ) : (
            // icon of delete
            <BrushCleaning 
              onClick={handleDeleteAllNotifications} 
              className="mt-1 ml-1 cursor-pointer text-gray-700 hover:text-red-600" 
              title="Clear all notifications"
            />
          )}
          <button className="text-black bg-white ml-3 text-sm px-2 py-1 rounded" onClick={handleDeleteAllNotifications}>
            Clear all notifications
          </button>
        </div>
        {/* buttun to mark all notification read */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleMarkAllAsRead}
          disabled={isMarkingAllRead || unreadCount === 0}
          className="text-xs text-blue-600 hover:text-blue-700 mt-1"
        >
          {isMarkingAllRead ? (
            <div className="w-3 h-3 border border-blue-600 border-t-transparent rounded-full animate-spin mr-1"></div>
          ) : (
            <Check className="h-3 w-3 mr-1" />
          )}
          Mark all as read
        </Button>
      </div>
{/* scrollarea of notification */}
      <ScrollArea 
        className="h-[500px]" 
        ref={scrollAreaRef}
        onScrollCapture={handleScroll}
      >
        {notifications?.length === 0 && !isInitialLoading ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Bell className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
            <p className="text-sm text-gray-500 mb-4">
              You're all caught up! Check back later for new updates.
            </p>
          </div>
        ) : (
          <>
            {notifications?.map((notification) => (
              <NotificationItem
                key={notification?.id}
                notification={notification}
                onDelete={removeNotification}
                onMarkAsRead={markAsRead}
              />
            ))}

            {isLoading && (
              <div className="p-4 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-4 h-4 border border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                  Loading more notifications...
                </div>
              </div>
            )}

            {!hasNextPage && notifications?.length > 0 && (
              <div className="p-4 text-center text-sm text-gray-400 border-t">
                You've reached the end of your notifications
              </div>
            )}
          </>
        )}
      </ScrollArea>
    </Card>
  );
};

export default NotificationHeader;