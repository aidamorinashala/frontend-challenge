'use client'

import { useCart } from '@/hooks/useCart'
import { ShoppingBag } from 'lucide-react'

export function Cart() {
  const { cartCount, isCartLoading } = useCart()

  return (
    <div className="flex items-center gap-2">
      <span className="text-blurple">
        <ShoppingBag />
      </span>
      {isCartLoading ? (
        <span>Loading</span>
      ) : (
        <span aria-live='polite'>
          <b>{cartCount}</b> {cartCount === 1 ? 'item' : 'items'} in cart
        </span>
      )}
    </div>
  )
}
