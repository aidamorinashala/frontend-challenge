import { Star } from 'lucide-react';

export const StarRating = (productRating: number) => {
  return (   
    <div className="flex items-center gap-1 mt-2">
      {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={ i < productRating ? "#eab308" : "#d1d5db" }
            className={i < productRating ? 'text-yellow-500' : 'text-gray-300'}
          />
        ))}
    </div>
  )
}
