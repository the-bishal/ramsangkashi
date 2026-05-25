import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function ActionButton({ children, variant = 'primary', className = '', to, state }) {
  const styles =
    variant === 'dark'
      ? 'bg-[#2a1710] text-white hover:bg-[#3a2117]'
      : variant === 'light'
        ? 'border border-[#9b6545] bg-transparent text-[#5c2c1d] hover:bg-white/70'
        : 'bg-[#7a321e] text-white hover:bg-[#8d3e25]'

  const classes = `inline-flex h-11 items-center justify-center gap-3 rounded-[3px] px-6 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition duration-300 ${styles} ${className}`

  if (to) {
    return (
      <Link to={to} state={state} className={classes}>
        {children}
        <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
      </Link>
    )
  }

  return (
    <button className={classes} type="button">
      {children}
      <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
    </button>
  )
}

export default ActionButton
