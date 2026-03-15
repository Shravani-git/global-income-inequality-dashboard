import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, BarChart3 } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/insights', label: 'Insights' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_#E8E4F0]' : 'bg-white shadow-[0_1px_0_#E8E4F0]'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src="/public/logo.png" alt="Logo" className="w-8 h-8 rounded-lg  group-hover:scale-105 transition-transform" />
            <span className="font-display text-ink-900 text-[1.05rem] leading-tight hidden sm:block">
              Global Income<br/>
              <span className="text-purple-700 text-[0.7rem] font-body font-500 tracking-widest uppercase">Analysis</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => {
              const active = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${active
                      ? 'text-purple-700 bg-purple-50'
                      : 'text-ink-500 hover:text-ink-900 hover:bg-purple-50'
                    }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-700" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-ink-500 hover:text-ink-900 hover:bg-purple-50 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80 border-t border-slate-border' : 'max-h-0'}`}>
        <div className="px-6 py-3 space-y-1 bg-white">
          {links.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${active ? 'text-purple-700 bg-purple-50' : 'text-ink-600 hover:text-ink-900 hover:bg-purple-50'}`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
