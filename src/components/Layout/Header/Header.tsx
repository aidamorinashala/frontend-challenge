import Logo from '@/components/Logo'
import Link from 'next/link'
import { Cart } from './Cart'

export function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group">
          <Logo className="w-40" />
          <span className="text-2xl font-title text-blurple tracking-tight">
            shop
          </span>
        </Link>

        <div>
          <Cart />
        </div>
      </div>
    </header>
  )
}
