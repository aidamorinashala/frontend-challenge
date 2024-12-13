'use client';

import { SDK } from '@/utils/sdk';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Grid, List, Star } from 'lucide-react';
import Image from 'next/image';

type ViewMode = 'grid' | 'list';

export function ProductGrid() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

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
        <button
          className={`flex items-center gap-2 px-4 py-2 border rounded-md font-medium ${
            viewMode === 'grid'
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-blue-500 border-blue-500'
          }`}
          onClick={() => setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid'))}
        >
          {viewMode === 'grid' ? <List size={18} /> : <Grid size={18} />}
          Switch to {viewMode === 'grid' ? 'List' : 'Grid'} View
        </button>
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
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 mb-2 rounded-full">
                {product.category}
              </span>
              <p className="text-gray-500 mb-2">{product.shortDescription}</p>
              <p className="text-gray-700 font-medium mb-2">${product.price}</p>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={ i < product.rating ? "#eab308" : "#d1d5db" }
                    className={i < product.rating ? 'text-yellow-500' : 'text-gray-300'}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
