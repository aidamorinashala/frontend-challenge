'use client'

import { useCart } from '@/hooks/useCart';

export function AddToCartButton({ productId }: { productId: string }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log('aadding to cart')
    addToCart({ productId, quantity: 1 });
  };

  return (
    <button className="border px-2 py-1" onClick={handleAddToCart}>
      Add to Cart
    </button>
  )
}
