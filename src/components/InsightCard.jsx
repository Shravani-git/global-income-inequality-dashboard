export default function InsightCard({ number, title, description, icon: Icon, accent = 'purple' }) {
  const accentMap = {
    purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', num: 'text-purple-700' },
    light: { bg: 'bg-purple-100', text: 'text-purple-500', border: 'border-purple-300', num: 'text-purple-400' },
    mid: { bg: 'bg-purple-50', text: 'text-purple-500', border: 'border-purple-200', num: 'text-purple-500' },
  }
  const c = accentMap[accent] || accentMap.purple

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-border p-7 shadow-card
      hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden">
      {/* Decorative number */}
      <span className={`absolute top-4 right-6 font-display text-6xl font-bold opacity-5 ${c.num} select-none`}>
        {String(number).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${c.bg} border ${c.border} mb-5`}>
        <Icon size={20} className={c.text} />
      </div>

      <h3 className="font-display text-ink-900 text-xl mb-3 leading-snug">{title}</h3>
      <p className="text-ink-500 text-sm leading-relaxed">{description}</p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-purple-700" />
    </div>
  )
}
