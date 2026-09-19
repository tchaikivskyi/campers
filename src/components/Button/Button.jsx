import { Link } from 'react-router-dom'
import clsx from 'clsx'
import css from './Button.module.css'

export default function Button({
  variant = 'primary',
  to,
  className,
  children,
  ...props
}) {
  const btnClass = clsx(css.btn, css[variant], className)

  if (to) {
    return (
      <Link to={to} className={btnClass} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={btnClass} {...props}>
      {children}
    </button>
  )
}
