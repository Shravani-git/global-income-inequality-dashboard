import { ExternalLink, Filter, ZoomIn, Download, Info } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const tips = [
  { icon: Filter, title: 'Use Filters', desc: 'Click region or year slicers to narrow your analysis to specific segments.' },
  { icon: ZoomIn, title: 'Drill Down', desc: 'Click on any chart element to drill deeper into country-level data.' },
  { icon: Download, title: 'Export Data', desc: 'Use the ⋯ menu on each visual to export underlying data as CSV.' },
  { icon: ExternalLink, title: 'Full Screen', desc: 'Click the arrows icon to expand visuals for a larger view.' },
]

export default function Dashboard() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white border-b border-slate-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <span className="text-xs font-mono tracking-widest uppercase text-purple-700 mb-3 block">Live Analytics</span>
          <h1 className="font-display text-4xl md:text-5xl text-ink-900 mb-4">
            Interactive Global Income Dashboard
          </h1>
          <p className="text-ink-500 text-lg max-w-2xl">
            Explore income distribution across countries and regions using interactive Power BI visuals. Filter, drill down, and uncover patterns in global economic data.
          </p>
        </div>
      </section>

      {/* Dashboard embed */}
      <section className="bg-slate-bg py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-border shadow-card overflow-hidden">
            {/* Window bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-border">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-mono text-ink-400">Global Income Analysis Report</span>
              <div className="w-20" />
            </div>

            {/* iframe + placeholder overlay */}
            <div className="relative">
              <iframe
                title="Power BI Dashboard"
                width="100%"
                height="700"
                src="https://app.powerbi.com/reportEmbed?reportId=a01f9464-4def-401f-a061-a12c2f5893c8&autoAuth=true&ctid=c963e145-750a-42b5-9a88-61c7812e5ad8"
                allowFullScreen
                className="block"
                style={{ border: 'none' }}
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* How to interact */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="How to Use"
            title="Interacting with the dashboard"
            subtitle="Get the most out of the Power BI visuals with these interaction tips."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tips.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-bg rounded-2xl border border-slate-border p-6 hover:border-purple-200 hover:bg-purple-50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-purple-700" />
                </div>
                <h4 className="font-semibold text-ink-900 text-sm mb-2">{title}</h4>
                <p className="text-ink-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-5 flex gap-3">
            <Info size={18} className="text-purple-700 flex-shrink-0 mt-0.5" />
            <p className="text-ink-600 text-sm leading-relaxed">
              <strong className="text-ink-900">Note:</strong> The dashboard is fully interactive — changes in one visual will cross-filter others. Use the region slicer on the left panel to focus on specific areas. Hover over data points for detailed tooltips.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
