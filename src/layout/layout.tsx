import Link from 'next/link'
import { ReactNode } from 'react'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav className="bg-blue-600 text-white p-5 space-x-5">
        <Link className="hover:underline" href="/">
          Main Page
        </Link>
        <Link className="hover:underline" href="/cart">
          Cart Page
        </Link>
        <Link className="hover:underline" href="/login">
          Login
        </Link>
      </nav>
      <main className="p-5">{children}</main>
    </div>
  )
}
