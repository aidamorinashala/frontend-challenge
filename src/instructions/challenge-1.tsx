import Markdown from 'react-markdown'

export default function Challenge1() {
  return (
    <Markdown
      children={`## Challenge 1 - Product Grid/List View
        
Create a responsive grid/list view of products from the existing data, with a toggle button to switch between grid and list view.

### Instructions

1. Open the \`src/app/challenge-1/page.tsx\` file
2. Style the product cards as you see fit
3. Implement an infinity scroll pagination
4. Implement a toggle button to switch between grid and list view

`}
    />
  )
}
