// skelton Component
export const NotificationSkeleton: React.FC = () => (
  <div className="p-4 border-b border-gray-100">
    <div className="flex items-start justify-between gap-3">
      <div className="flex-1">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded w-full mb-1 animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6 mb-2 animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded w-1/4 animate-pulse"></div>
      </div>
      <div className="w-8 h-8 bg-gray-200 rounded animate-pulse flex-shrink-0"></div>
    </div>
  </div>
);