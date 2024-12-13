import { faker } from '@faker-js/faker'
import { writeFile } from 'fs/promises'

const products = Array.from({ length: 500 }, () => {
  const id = faker.string.uuid()

  return {
    id,
    name: faker.commerce.productName(),
    price: faker.number.int({ min: 100, max: 1000 }),
    shortDescription: faker.commerce.productDescription(),
    image: `https://picsum.photos/seed/${id}/800/800`,
    category: faker.commerce.department(),
    stock: faker.number.int({ min: 1, max: 100 }),
    rating: faker.number.int({ min: 1, max: 5 }),
  }
})

await writeFile('db.json', JSON.stringify({ products }, null, 2))
