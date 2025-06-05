"ise client"
import React, { useState, useEffect, useRef } from 'react';
import { Bell, Trash2, Check, X, Package, Settings, User } from 'lucide-react';

// Static data
const STATIC_NOTIFICATIONS = [
  {
    id: 1,
    title: "Your Order Has Been Shipped",
    message: "Your order #12345 has been shipped and will arrive in 2-3 business days. We'll send you another update once it's out for delivery. In the meantime, you can track your package using the link in your email.",
    isRead: false,
    timestamp: "2 hours ago",
    type: "order",
    icon: Package
  },
  {
    id: 2,
    title: "Your Order Has Been Shipped",
    message: "Your order #12346 has been shipped and will arrive in 2-3 business days. We'll send you another update once it's out for delivery. In the meantime, you can track your package using the link in your email.",
    isRead: true,
    timestamp: "4 hours ago",
    type: "order",
    icon: Package
  },
  {
    id: 3,
    title: "Your Order Has Been Shipped",
    message: "Your order #12347 has been shipped and will arrive in 2-3 business days. We'll send you another update once it's out for delivery. In the meantime, you can track your package using the link in your email.",
    isRead: false,
    timestamp: "6 hours ago",
    type: "order",
    icon: Package
  },
  {
    id: 4,
    title: "Your Order Has Been Shipped",
    message: "Your order #12348 has been shipped and will arrive in 2-3 business days. We'll send you another update once it's out for delivery. In the meantime, you can track your package using the link in your email.",
    isRead: true,
    timestamp: "8 hours ago",
    type: "order",
    icon: Package
  },
  {
    id: 5,
    title: "Your Order Has Been Shipped",
    message: "Your order #12349 has been shipped and will arrive in 2-3 business days. We'll send you another update once it's out for delivery. In the meantime, you can track your package using the link in your email.",
    isRead: false,
    timestamp: "1 day ago",
    type: "order",
    icon: Package
  },
  {
    id: 6,
    title: "Your Order Has Been Shipped",
    message: "Your order #12350 has been shipped and will arrive in 2-3 business days. We'll send you another update once it's out for delivery. In the meantime, you can track your package using the link in your email.",
    isRead: true,
    timestamp: "1 day ago",
    type: "order",
    icon: Package
  },
  {
    id: 7,
    title: "Account Settings Updated",
    message: "Your account settings have been successfully updated. If this wasn't you, please contact our support team immediately.",
    isRead: false,
    timestamp: "2 days ago",
    type: "account",
    icon: Settings
  },
  {
    id: 8,
    title: "Welcome to Our Platform",
    message: "Welcome! We're excited to have you on board. Explore our features and don't hesitate to reach out if you need any help.",
    isRead: true,
    timestamp: "3 days ago",
    type: "welcome",
    icon: User
  }
];

// Notification Badge Component
const NotificationBadge = ({ count }) => {
  if (count === 0) return null;
  
  return (
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
      {count > 9 ? '9+' : count}
    </span>
  );
};

// Notification Toggle Button Component
const NotificationToggle = ({ unreadCount, isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="relative p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <Bell className="w-6 h-6 text-gray-700" />
      <NotificationBadge count={unreadCount} />
    </button>
  );
};

// Notification Header Component
const NotificationHeader = ({ count, onClose, onClearAll, onMarkAllRead }) => {
  return (
    <div className="bg-red-600 text-white p-4 rounded-t-lg">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Notifications ({count})</h3>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex items-center gap-4 mt-3 text-sm">
        <button
          onClick={onClearAll}
          className="flex items-center gap-1 text-white hover:text-gray-200 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Clear all notifications
        </button>
        <button
          onClick={onMarkAllRead}
          className="flex items-center gap-1 text-white hover:text-gray-200 transition-colors"
        >
          <Check className="w-4 h-4" />
          Mark all as read
        </button>
      </div>
    </div>
  );
};

// Individual Notification Item Component
const NotificationItem = ({ notification, onMarkRead, onDelete, isLast }) => {
  const IconComponent = notification.icon;
  
  const getIconStyles = (type) => {
    switch (type) {
      case 'order':
        return 'bg-green-100 text-green-600';
      case 'account':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-purple-100 text-purple-600';
    }
  };

  return (
    <div
      className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
        !notification.isRead ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
      } ${isLast ? 'border-b-0' : ''}`}
    >
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-full ${getIconStyles(notification.type)}`}>
          <IconComponent className="w-4 h-4" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-gray-900 text-sm">
              {notification.title}
            </h4>
            <div className="flex items-center gap-2 ml-2">
              {!notification.isRead && (
                <button
                  onClick={() => onMarkRead(notification.id)}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  title="Mark as read"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </button>
              )}
              <button
                onClick={() => onDelete(notification.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
                title="Delete notification"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1 line-clamp-3">
            {notification.message}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            {notification.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

// Loading Indicator Component
const LoadingIndicator = () => {
  return (
    <div className="p-4 text-center">
      <div className="inline-flex items-center gap-2 text-gray-500">
        <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        Loading more notifications...
      </div>
    </div>
  );
};

// Empty State Component
const EmptyState = () => {
  return (
    <div className="p-8 text-center text-gray-500">
      <Bell className="w-12 h-12 mx-auto mb-3 text-gray-300" />
      <p>No notifications to display.</p>
    </div>
  );
};

// End of List Component
const EndOfList = () => {
  return (
    <div className="p-4 text-center text-gray-400 text-sm">
      You've reached the end of your notifications
    </div>
  );
};

// Notifications List Component
const NotificationsList = ({ 
  notifications, 
  isLoading, 
  hasMore, 
  onScroll, 
  onMarkRead, 
  onDelete 
}) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', onScroll);
      return () => element.removeEventListener('scroll', onScroll);
    }
  }, [onScroll]);

  if (notifications.length === 0 && !isLoading) {
    return <EmptyState />;
  }

  return (
    <div 
      ref={scrollRef}
      className="flex-1 overflow-y-auto max-h-80"
    >
      <div className="p-2">
        {notifications.map((notification, index) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onMarkRead={onMarkRead}
            onDelete={onDelete}
            isLast={index === notifications.length - 1}
          />
        ))}
        
        {isLoading && <LoadingIndicator />}
        {!hasMore && notifications.length > 0 && <EndOfList />}
      </div>
    </div>
  );
};

// Notifications Panel Component
const NotificationsPanel = ({ 
  isOpen, 
  notifications, 
  isLoading, 
  hasMore, 
  onClose, 
  onClearAll, 
  onMarkAllRead, 
  onMarkRead, 
  onDelete, 
  onScroll 
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="absolute right-0 top-12 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 max-h-96 flex flex-col">
        <NotificationHeader
          count={notifications.length}
          onClose={onClose}
          onClearAll={onClearAll}
          onMarkAllRead={onMarkAllRead}
        />
        
        <NotificationsList
          notifications={notifications}
          isLoading={isLoading}
          hasMore={hasMore}
          onScroll={onScroll}
          onMarkRead={onMarkRead}
          onDelete={onDelete}
        />
      </div>
      
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
    </>
  );
};

// Custom Hook for Notifications Logic
const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [displayedNotifications, setDisplayedNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  // Initialize notifications
  useEffect(() => {
    setNotifications(STATIC_NOTIFICATIONS);
    loadMoreNotifications(0);
  }, []);

  // Simulate loading more notifications
  const loadMoreNotifications = (currentPage) => {
    setIsLoading(true);
    
    setTimeout(() => {
      const itemsPerPage = 3;
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const newNotifications = STATIC_NOTIFICATIONS.slice(startIndex, endIndex);
      
      if (currentPage === 0) {
        setDisplayedNotifications(newNotifications);
      } else {
        setDisplayedNotifications(prev => [...prev, ...newNotifications]);
      }
      
      setHasMore(endIndex < STATIC_NOTIFICATIONS.length);
      setIsLoading(false);
      setPage(currentPage + 1);
    }, 500);
  };

  // Handle scroll for infinite loading
  const handleScroll = () => {
    const element = document.querySelector('.overflow-y-auto');
    if (!element || isLoading || !hasMore) return;
    
    const { scrollTop, scrollHeight, clientHeight } = element;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      loadMoreNotifications(page);
    }
  };

  // Get unread count
  const unreadCount = notifications.filter(n => !n.isRead).length;

  // Mark as read
  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, isRead: true } : n)
    );
    setDisplayedNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, isRead: true } : n)
    );
  };

  // Delete notification
  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    setDisplayedNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
    setDisplayedNotifications([]);
  };

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    setDisplayedNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  return {
    notifications,
    displayedNotifications,
    isLoading,
    hasMore,
    unreadCount,
    markAsRead,
    deleteNotification,
    clearAllNotifications,
    markAllAsRead,
    handleScroll
  };
};

// Main Notifications System Component
const NotificationsSystem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    notifications,
    displayedNotifications,
    isLoading,
    hasMore,
    unreadCount,
    markAsRead,
    deleteNotification,
    clearAllNotifications,
    markAllAsRead,
    handleScroll
  } = useNotifications();

  return (
    <div className="relative">
      <NotificationToggle
        unreadCount={unreadCount}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      />
      
      <NotificationsPanel
        isOpen={isOpen}
        notifications={displayedNotifications}
        isLoading={isLoading}
        hasMore={hasMore}
        onClose={() => setIsOpen(false)}
        onClearAll={clearAllNotifications}
        onMarkAllRead={markAllAsRead}
        onMarkRead={markAsRead}
        onDelete={deleteNotification}
        onScroll={handleScroll}
      />
    </div>
  );
};

export default NotificationsSystem;