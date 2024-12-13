import Markdown from 'react-markdown'

export default function Challenge2() {
  return (
    <Markdown
      children={`## Challenge 2 - Product Page

This test is all about state management. We want to add a product to the cart and then display the number of items in the cart in the header.

Feel free to use any state management library you want (\`zustand\`, \`jotai\`, \`react-query\`, etc.), or even just plain react contexts if you prefer.

### Requirements:
- Use the API (\`/api/cart\`) to add and retrieve items to the cart
- Give the user feedback when an item is added to the cart and update the cart count in the header

      `}
    />
  )
}
