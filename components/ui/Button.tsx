import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'a'> & {
  variant?: 'solid' | 'ghost'
}

export default function Button({ href, className = '', variant = 'solid', children, ...props }: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60'

  const variantStyles =
    variant === 'ghost'
      ? 'border-surface bg-surface text-foreground hover:bg-surface/90'
      : 'bg-accent text-white border-accent hover:bg-accent/90'

  return (
    <Link href={href || '#'} className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </Link>
  )
}
