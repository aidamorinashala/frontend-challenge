'use client'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

export function Instructions() {
  const pathname = usePathname()
  const path = pathname.split('/').pop()

  if (!path?.startsWith('challenge-')) {
    return null
  }

  const InstructionsContent = dynamic(
    () => import(`../instructions/${path}.tsx`),
    { ssr: false, loading: () => <div>Loading instructions...</div> },
  )

  return (
    <div className="w-2/6 hidden lg:block my-8">
      <aside className="px-6 py-4 bg-blue-50 dark:bg-blue-950 rounded-xl prose-sm text-blue-900 dark:text-blue-100 prose-ul:list-disc prose-ol:list-decimal prose-ol:mt-0 prose-ol:mb-0 prose-a:text-blurple dark:prose-a:text-blue-300 prose-a:underline prose-headings:text-blue-800 dark:prose-headings:text-blue-200 prose-code:bg-blue-100 dark:prose-code:bg-blue-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-blue-900 dark:prose-code:text-blue-100">
        <InstructionsContent />
      </aside>
    </div>
  )
}
