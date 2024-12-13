'use client'

import { SDK } from '@/utils/sdk'
import { ShoppingBag } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Cart() {
  const [numCartItems, setNumCartItems] = useState(-1)

  useEffect(() => {
    fetch('/api/cart', {
      // Disables nextjs cache. But feel free to use it if you want.
      cache: 'no-store',
    })
      .then((res) => res.json() as Promise<{ cart: SDK.Cart }>)
      .then((data) =>
        setNumCartItems(Object.values(data.cart).reduce((a, b) => a + b, 0)),
      )
  }, [])

  return (
    <div className="flex items-center gap-2">
      <span className="text-blurple">
        <ShoppingBag />
      </span>
      {numCartItems >= 0 ? (
        <span>
          <b>{numCartItems}</b> items in cart
        </span>
      ) : (
        <span>loading...</span>
      )}
    </div>
  )
}
