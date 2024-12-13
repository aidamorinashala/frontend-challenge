'use client';

import { SDK } from '@/utils/sdk';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { StarRating } from '@/components/Rating/StarRating';
import { useViewMode } from '@/hooks/useViewMode';
import { ViewModeToggle } from '../Toggle/ViewModeToggle';
import { CategoryLabel } from '../CategoryLabel';

export function ProductGrid() {
  const { viewMode, toggleViewMode } = useViewMode('grid');

  const { data: products = [], isLoading, isError } = useQuery({
    queryKey: ['products', { limit: 10, offset: 0 }],
    queryFn: () => SDK.getAllProducts({ limit: 10, offset: 0 }),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products. Please try again later.</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-end mb-4">
        <ViewModeToggle viewMode={viewMode} toggleViewMode={toggleViewMode}/> 
      </div>
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
            : 'space-y-4'
        }
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={`border rounded-lg p-4 shadow-sm ${
              viewMode === 'list' ? 'flex items-center gap-4' : ''
            }`}
          >
            <div
              className={`relative ${
                viewMode === 'grid' ? 'h-48 w-full' : 'h-24 w-24 flex-shrink-0'
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill={true}
                className="rounded-md"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <CategoryLabel category={product.category}/>
              <p className="text-gray-500 mb-2">{product.shortDescription}</p>
              <p className="text-gray-700 font-medium mb-2">${product.price}</p>
              <StarRating productRating={product.rating}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
