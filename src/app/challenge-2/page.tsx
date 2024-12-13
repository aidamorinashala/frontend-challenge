import { AddToCartButton } from '@/components/Product/AddToCartButton'
import { SDK } from '@/utils/sdk'
import Image from 'next/image'

export default async function Challenge2() {
  const product = await SDK.getFirstProduct()

  return (
    <div>
      <div className="flex gap-4">
        <div className="aspect-square w-1/3">
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-title text-blurple tracking-tight mb-4">
            {product.name}
          </h1>

          <p>{product.shortDescription}</p>

          <div className="flex gap-1 mt-4">
            <span className="text-2xl mb-2">{product.price}</span>
            <span className="text-blurple">kr</span>
          </div>

          <div>
            <AddToCartButton productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
