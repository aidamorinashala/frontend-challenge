interface CategoryLabelProps {
  category: string
}

export const CategoryLabel = ({ category }: CategoryLabelProps) => {
  return (
    <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 mb-2 rounded-full">
      {category}
    </span>
  )
}
