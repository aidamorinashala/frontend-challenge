interface CategoryLabelProps {
  category: string
}

export const CategoryLabel = ({ category }: CategoryLabelProps) => {
  return (
    <span className="inline-block bg-blue-100 text-sky-800 text-sm px-3 py-1 mb-2 rounded-full" aria-label="This item belongs to following category">
      {category}
    </span>
  )
}
