import { Star } from "lucide-react";

export default function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex gap-1 text-yellow-400">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <Star key={i} size={16} fill="currentColor" stroke="currentColor" />
        ))}

      {halfStar && (
        <Star size={16} fill="currentColor" stroke="currentColor" className="opacity-50" />
      )}

      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <Star key={i + fullStars + 1} size={16} className="text-gray-300" />
        ))}
    </div>
  );
}
