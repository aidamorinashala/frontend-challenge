'use client'

import { useCart } from '@/hooks/useCart';

export function AddToCartButton({ productId, productTitle }: { productId: string, productTitle: string }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ productId, quantity: 1, productTitle });
  };

  return (
    <button className="border px-2 py-1" onClick={handleAddToCart}>
      Add to Cart
    </button>
  )
}
