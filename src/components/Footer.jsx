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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/src/assets/logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
              <span className="font-display text-white text-lg">Global Income Analysis</span>
            </div>
            <p className="text-ink-300 text-sm leading-relaxed max-w-xs">
              Interactive data exploration of global income distribution across countries and regions.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://github.com/Shravani-git" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-purple-700 flex items-center justify-center transition-colors">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/shrawani-tati" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-purple-700 flex items-center justify-center transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-ink-400 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-ink-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-3 h-px bg-purple-400 opacity-0 group-hover:opacity-100 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project info */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-ink-400 mb-4">Project</h4>
            <ul className="space-y-2">
              {['Power BI Dashboard', 'World Bank Data', 'React + Vite', 'Tailwind CSS'].map((t) => (
                <li key={t} className="text-sm text-ink-300 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-purple-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-500">© {new Date().getFullYear()} Global Income Analysis Dashboard. All rights reserved.</p>
          <p className="text-xs text-ink-600 font-mono">Built with React + Power BI</p>
        </div>
      </div>
    </footer>
  )
}
