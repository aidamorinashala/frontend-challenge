import { SDK } from '@/utils/sdk'
import { cookies } from 'next/headers'

// ⚠️ DO NOT MODIFY THIS FILE ⚠️
// This file simulates a real-world scenario where frontend and backend teams work independently.
// It intentionally includes artificial delays and simplified storage to demonstrate typical challenges
// in distributed team environments.

export async function GET() {
  const cart = await getCartOrDefault()

  await delay(200, 500)

  return Response.json({ cart })
}

export async function POST(request: Request) {
  const { productId } = await request.json()
  const cookieStore = await cookies()

  await delay(1000, 2500)

  const cart = await getCartOrDefault()

  cart[productId] = (cart[productId] ?? 0) + 1

  cookieStore.set('cart', JSON.stringify(cart))

  return Response.json({ cart })
}

const getCartOrDefault = async (): Promise<SDK.Cart> => {
  const cookieStore = await cookies()
  const cartValue = cookieStore.get('cart')?.value ?? '{}'
  const cart = JSON.parse(cartValue) as SDK.Cart

  return cart
}

const delay = (min: number, max: number) =>
  new Promise((resolve) =>
    setTimeout(resolve, min + Math.random() * (max - min)),
  )
