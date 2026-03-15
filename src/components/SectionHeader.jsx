export default function SectionHeader({ eyebrow, title, subtitle, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-mono tracking-widest uppercase text-purple-700 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl text-ink-900 leading-tight mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-ink-500 text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
