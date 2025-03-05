import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-amber-600 hover:bg-stone-100 hover:text-amber-700"
    >
      {children}
    </Link>
  )
}
