function SectionEyebrow({ children, align = 'left', light = false }) {
  return (
    <div
      className={`mb-4 flex items-center gap-3 ${
        align === 'center' ? 'justify-center' : ''
      } ${light ? 'text-[#c58b54]' : 'text-[#7b3b25]'}`}
    >
      <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em]">
        {children}
      </span>
      <span
        className={`h-px w-9 ${light ? 'bg-[#c58b54]/70' : 'bg-[#b58a63]'}`}
      />
    </div>
  )
}

export default SectionEyebrow
