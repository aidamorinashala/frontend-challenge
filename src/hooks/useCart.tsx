import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import toast, { Toast } from 'react-hot-toast';

interface CartItem {
  productId: string
  quantity: number,
  productTitle: string,
}

export const useCart = () => {
  const queryClient = useQueryClient()

  const { data: cart = {}, isLoading: isCartLoading } = useQuery<CartItem[]>({
    queryKey: ['cart'],
    queryFn: async () => {
      const response = await fetch('/api/cart')
      if (!response.ok) {
        throw new Error('Failed to fetch cart')
      }
      const cartData = await response.json()
      return cartData.cart || {}
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  const { mutate: addToCart, isPending: isAddingToCart, variables} = useMutation({
    mutationFn: async (item: CartItem) => {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }
      toast(`${item.productTitle} added to cart!`);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  })

  const cartCount = Object.values(cart || {}).reduce(
    (total: number, quantity) =>
      total + (typeof quantity === 'number' ? quantity : 0),
    0,
  )

  return {
    cart,
    cartCount,
    addToCart,
    isCartLoading,
    isAddingToCart,
    variables
  }
}
