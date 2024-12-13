'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid/ProductGrid';

export default function Challenge1() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ProductGrid />
    </QueryClientProvider>
  );
}
