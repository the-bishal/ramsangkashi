function OrnamentIcon({ icon: Icon, className = '', size = 'md' }) {
  const isString = typeof Icon === 'string'

  const containerSizes = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-16 w-16 md:h-20 md:w-20',
    xl: 'h-20 w-20 md:h-28 md:w-28',
    '2xl': 'h-28 w-28 md:h-36 md:w-36',
  }

  const iconSizes = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-11 w-11 md:h-14 md:w-14',
    xl: 'h-14 w-14 md:h-20 md:w-20',
    '2xl': 'h-20 w-20 md:h-28 md:w-28',
  }

  const containerClass = containerSizes[size] || containerSizes.md
  const iconClass = iconSizes[size] || iconSizes.md

  return (
    <span
      className={`inline-flex items-center justify-center text-[#8f5434] ${containerClass} ${className}`}
    >
      {isString ? (
        <img src={Icon} alt="" className={`${iconClass} object-contain`} />
      ) : (
        Icon && <Icon className={iconClass} strokeWidth={1.25} />
      )}
    </span>
  )
}

export default OrnamentIcon
