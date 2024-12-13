'use client'

import { SDK } from '@/utils/sdk'
import { useEffect, useState } from 'react'

export function ProductGrid() {
  const [products, setProducts] = useState<SDK.Product[]>([])

  /**
   * This is poor man's suspense, please use something better (like react-query, server components+suspense, etc.)
   */
  useEffect(() => {
    SDK.getAllProducts({ limit: 10, offset: 0 }).then(setProducts)
  }, [])

  return (
    <div>
      {/* Do your magic here */}
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <div>{product.name}</div>
            <div>{product.price} kr</div>
          </div>
        ))}
      </div>

      {/* This below can be removed */}
      {products.length > 0 && (
        <div className="prose prose-pre:bg-green-100 dark:prose-pre:bg-green-900 prose-pre:text-green-900 dark:prose-pre:text-green-100 mt-8 border-t pt-4">
          <h3 className="text-green-900 dark:text-green-100">
            Data structure <i>(this can be removed)</i>
          </h3>

          <pre className="text-xs overflow-x-auto whitespace-pre-wrap">
            {JSON.stringify([products[0]], null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
