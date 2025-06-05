// AutoPlayIndicator.jsx

export default function AutoPlayIndicator({ isAutoPlaying }) {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <div className="flex items-center space-x-2 text-sm text-gray-500 bg-white/80 rounded-full px-3 py-1">
        <div className={`w-2 h-2 rounded-full transition-colors ${
          isAutoPlaying ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className="font-medium text-xs">
          {isAutoPlaying ? 'Auto-playing' : 'Paused'}
        </span>
      </div>
    </div>
  );
}