import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'inverted' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:ring-offset-2 disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-rose-500 text-white hover:bg-rose-600 shadow-sm',
  inverted: 'bg-white text-rose-600 hover:bg-rose-50 shadow-sm',
  outline: 'border border-stone-300 text-stone-800 hover:bg-stone-50',
  ghost: 'text-stone-700 hover:text-stone-900',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

type ButtonProps = {
  href?: string
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
} & Omit<ComponentProps<'a'>, 'href'>

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  return <button className={cls}>{children}</button>
}
