import _data from '../../db.json' assert { type: 'json' }

const data = Object.assign({}, _data)

export namespace SDK {
  export type Product = (typeof data.products)[number]
  export type Cart = {
    [productId: string]: number
  }

  export const getAllProducts = async ({
    limit,
    offset,
  }: {
    limit: number
    offset: number
  }) => {
    await delay(350, 1500)

    if (limit > 100) {
      throw new Error('Limit must be less than 100')
    }

    return data.products.slice(offset, offset + limit)
  }

  export const getFirstProduct = async () => {
    return data.products[0]
  }
}

const delay = (min: number, max: number) =>
  new Promise((resolve) =>
    setTimeout(resolve, min + Math.random() * (max - min)),
  )
