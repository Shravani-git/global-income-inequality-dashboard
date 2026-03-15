import { Link } from 'react-router-dom'
import { BarChart3, Github, Linkedin, ExternalLink } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/insights', label: 'Insights' },
  { to: '/about', label: 'About' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="w-9 h-9 rounded-lg"
          />
          <span className="font-display text-white text-lg">
            Global Income Analysis
          </span>
        </div>

        <p className="text-ink-300 text-sm leading-relaxed max-w-sm">
          Interactive exploration of global income distribution, inequality,
          and economic development trends across countries and regions.
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 mt-6">
          <a
            href="https://github.com/Shravani-git"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-purple-600 flex items-center justify-center transition-colors"
          >
            <Github size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/shrawani-tati"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-purple-600 flex items-center justify-center transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <h4 className="text-xs font-mono tracking-widest uppercase text-ink-400 mb-5">
          Navigation
        </h4>

        <ul className="space-y-3">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className="text-sm text-ink-300 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span className="w-2 h-px bg-purple-400 opacity-0 group-hover:opacity-100 transition-all" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Data Info */}
      <div>
        <h4 className="text-xs font-mono tracking-widest uppercase text-ink-400 mb-5">
          Dataset
        </h4>

        <ul className="text-sm text-ink-300 space-y-2">
          <li>54 Countries</li>
          <li>10 Economic Indicators</li>
          <li>6 Global Regions</li>
          <li>2000 – 2023</li>
        </ul>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-ink-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-ink-400 gap-3">
      <p>© {new Date().getFullYear()} Global Income Analysis Dashboard</p>
      <p>Data Source: World Bank & Our World in Data</p>
    </div>

  </div>
</footer>
  )
}
