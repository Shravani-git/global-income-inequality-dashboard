import { Github, Linkedin, ExternalLink, BarChart3, Code2, Database, Globe, TrendingUp, BookOpen, Briefcase, Cpu, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const skills = [
  { icon: BarChart3, label: 'Power BI & DAX' },
  { icon: Database, label: 'Data Modeling' },
  { icon: Code2, label: 'React & JavaScript' },
  { icon: Globe, label: 'Data Storytelling' },
]

const factors = [
  { icon: TrendingUp, title: 'Economic Development', desc: 'Some countries have stronger economies and industries than others, creating structural income advantages.' },
  { icon: BookOpen, title: 'Education Access', desc: 'Education strongly influences income opportunities — countries with higher literacy rates tend to have better income distribution.' },
  { icon: Briefcase, title: 'Government Policies', desc: 'Tax systems, welfare programs, and labor laws affect how income is distributed across a population.' },
  { icon: Cpu, title: 'Technological Growth', desc: 'Automation and digital economies can widen income gaps between tech-enabled and traditional economies.' },
  { icon: Globe, title: 'Globalization', desc: 'Trade and global markets can benefit some regions more than others, creating uneven economic development.' },
]

const indicators = [
  {
    abbr: 'GDP',
    name: 'Gross Domestic Product',
    desc: 'GDP measures the total value of goods and services produced in a country. It is commonly used to estimate the economic strength of a nation.',
    color: 'bg-purple-50 border-purple-200 text-purple-700',
    badge: 'bg-purple-700 text-white',
  },
  {
    abbr: 'Gini',
    name: 'Gini Index',
    desc: 'The Gini Index measures income inequality within a population. 0 = perfect equality (everyone earns the same); 100 = extreme inequality (one person holds all income).',
    color: 'bg-purple-100 border-purple-300 text-purple-700',
    badge: 'bg-purple-500 text-white',
  },
  {
    abbr: 'GDP/c',
    name: 'GDP per Capita',
    desc: 'GDP per capita divides a country\'s GDP by its population to estimate the average economic output per person — a useful proxy for standard of living.',
    color: 'bg-purple-50 border-purple-200 text-purple-700',
    badge: 'bg-purple-300 text-purple-900',
  },
]

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white border-b border-slate-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <span className="text-xs font-mono tracking-widest uppercase text-purple-700 mb-3 block">About</span>
          <h1 className="font-display text-4xl md:text-5xl text-ink-900 mb-4">About This Project</h1>
          <p className="text-ink-500 text-lg max-w-2xl">
            Understanding how wealth and opportunity are distributed around the world — made accessible to everyone.
          </p>
        </div>
      </section>

      {/* About project */}
      <section className="bg-slate-bg py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* Project Section */}
      <div className="bg-white rounded-2xl border border-slate-border shadow-card p-8 md:p-10">
        <span className="text-xs font-mono tracking-widest uppercase text-purple-700 mb-3 block">
          The Project
        </span>

        <h2 className="font-display text-2xl text-ink-900 mb-5">
          Global Income Analysis Dashboard
        </h2>

        <div className="space-y-4 text-ink-500 text-sm leading-relaxed">
          <p>
            The Global Income Analysis Dashboard is an interactive data visualization platform designed to make complex economic data easier to understand. It combines datasets from international sources and presents them through clear visual analytics to help users explore patterns of global income distribution and inequality.
          </p>

          <p>
            Our goal is to make data accessible so that anyone — from students to policymakers — can understand how wealth and opportunity are distributed around the world.
          </p>
        </div>

        <p className="text-ink-500 text-sm leading-relaxed mt-6 mb-6">
          The platform was built using Power BI for analytics and integrated into a React web application, reflecting a real-world production architecture where each tool does what it does best: Power BI handles computation-heavy visual analytics, while React handles navigation and presentation.
        </p>

        <div className="flex gap-3 flex-wrap">
          <a
            href="https://github.com/Shravani-git/global-income-inequality-dashboard"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-ink-900 hover:bg-ink-800 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
          >
            <Github size={15} /> View on GitHub
          </a>

         
        </div>
      </div>


      {/* Education Section */}
      <div>
        

        <h2 className="font-display text-2xl md:text-3xl md:mt-5 text-ink-900 mb-5">
          What is Income Inequality?
        </h2>

        <p className="text-ink-500 text-sm leading-relaxed mb-5">
          Income inequality refers to the unequal distribution of income among individuals or groups within a country or across the world. It reflects how evenly — or unevenly — economic resources are shared among a population.
        </p>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
          <p className="text-ink-600 text-sm leading-relaxed">
            <strong className="text-ink-900">Why does it matter?</strong> 
            High levels of inequality can affect economic stability, social mobility, and access to resources. Countries with extreme inequality often see lower overall quality of life, reduced educational attainment, and diminished social trust.
          </p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mt-4">
  <p className="text-ink-600 text-sm leading-relaxed">
    <strong className="text-ink-900">How is inequality measured?</strong> 
    Economists use indicators such as the <strong>Gini Index</strong> and <strong>GDP per capita</strong> to understand income distribution. These metrics help reveal how evenly wealth is shared within a population and allow comparisons between countries.
  </p>
</div>
      </div>

    </div>
  </div>
</section>

      {/* Economic Indicators Explained */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Economic Indicators Explained"
            title="Key metrics used in this dashboard"
            subtitle="Not familiar with economic terminology? Here's what the key indicators in this dashboard actually mean."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {indicators.map(({ abbr, name, desc, color, badge }) => (
              <div key={abbr} className={`rounded-2xl border p-7 ${color} hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300`}>
                <span className={`inline-block text-xs font-mono font-bold px-3 py-1 rounded-full mb-4 ${badge}`}>
                  {abbr}
                </span>
                <h3 className="font-display text-xl text-ink-900 mb-3">{name}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors contributing to inequality */}
      <section className="bg-slate-bg py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Context"
            title="Factors Contributing to Global Inequality"
            subtitle="Income inequality doesn't arise in isolation. These structural factors shape how wealth is created and distributed."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factors.map(({ icon: Icon, title, desc }, i) => (
              <div key={title}
                className="bg-white rounded-2xl border border-slate-border p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-purple-200 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-purple-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink-900 text-sm mb-1.5">{title}</h4>
                    <p className="text-ink-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer card */}
      <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <SectionHeader
      eyebrow="The Developer"
      title="Meet the person behind the project"
    />

    <div className="grid md:grid-cols-2 gap-8 items-start">

      {/* Profile */}
      <div className="bg-slate-bg rounded-2xl border border-slate-border shadow-card p-8">

        <h3 className="font-display text-2xl text-ink-900 mb-1">
          Shrawani Tati
        </h3>

        <p className="text-purple-700 text-sm font-medium mb-4">
          Data Analyst & Frontend Developer
        </p>

        <p className="text-ink-500 text-sm leading-relaxed mb-6">
          Passionate about transforming raw data into clear, actionable insights.
          I build interactive dashboards and web interfaces that make complex
          analytics easier to explore and understand.
        </p>

        <div className="space-y-2">
          <a
            href="https://github.com/Shravani-git"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-xl bg-white hover:bg-purple-50 border border-slate-border transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <Github size={16} className="text-ink-600" />
              <span className="text-sm font-medium text-ink-700">
                GitHub Profile
              </span>
            </div>
            <ExternalLink size={13} className="text-ink-400 group-hover:text-ink-600 transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/shrawani-tati"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-xl bg-white hover:bg-purple-50 border border-slate-border transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <Linkedin size={16} className="text-ink-600" />
              <span className="text-sm font-medium text-ink-700">
                LinkedIn Profile
              </span>
            </div>
            <ExternalLink size={13} className="text-ink-400 group-hover:text-ink-600 transition-colors" />
          </a>
        </div>
      </div>


      {/* Open Source */}
      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-7">
        <h4 className="font-semibold text-ink-900 text-sm mb-2">
          Open Source
        </h4>

        <p className="text-ink-500 text-sm leading-relaxed mb-5">
          This project is open source and available for learning and exploration.
          Developers and data enthusiasts are welcome to explore the repository,
          understand the architecture, and adapt the project for their own
          analytics work.
        </p>

        <a
          href="https://github.com/Shravani-git/global-income-inequality-dashboard"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-purple-700 text-sm font-medium hover:underline"
        >
          View source code <ExternalLink size={13} />
        </a>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-purple-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(196,153,202,0.3),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Ready to explore the data?</h2>
          <p className="text-purple-100 mb-8 max-w-md mx-auto text-sm">
            Now that you understand the context, dive into the interactive dashboard to see these patterns firsthand.
          </p>
          <a href="/dashboard"
            className="inline-flex items-center gap-2 bg-white text-purple-700 hover:bg-purple-50 px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md">
            Open Dashboard <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}
