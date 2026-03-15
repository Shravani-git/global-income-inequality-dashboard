import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  BarChart2,
  Map,
  AlertCircle,
  Lightbulb,
  BarChart,
  Users,
  BookOpen,
  Briefcase,
  Filter,
  Layers,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import img from "../assets/bg1.png";
const stats = [
  { value: "54", label: "Countries Analyzed" },
  { value: "20+", label: "Years of Data" },
  { value: "6", label: "Global Regions" },
  { value: "10", label: "Key Metrics" },
];

const features = [
  {
    icon: Globe,
    title: "Global Income Comparison",
    desc: "Compare income levels across countries and regions using interactive charts that reveal stark disparities and unexpected similarities.",
  },
  {
    icon: BarChart2,
    title: "Inequality Indicators",
    desc: "Understand economic inequality using indicators like Gini Index, GDP per capita, and income share distribution across population segments.",
  },
  {
    icon: Filter,
    title: "Interactive Data Visualization",
    desc: "Use filters and dashboards to explore trends across years, countries, and economic groups — all in one place.",
  },
  {
    icon: Users,
    title: "Insights for Everyone",
    desc: "Designed for students, researchers, policymakers, and anyone curious about global economic disparities.",
  },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden">
        {/* Background Image */}
        <img
          src={img}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            {/* <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-8">
               <span className="w-1.5 h-1.5 rounded-full bg-purple-700 animate-pulse" />
              Data Analytics Project
            </span>  */}
            <h1 className="font-display text-white text-5xl md:text-6xl lg:text-7xl  leading-[1.05] mb-6">
              Global Income
              <br />
              <em className="not-italic text-purple-500">Analysis</em> Dashboard
            </h1>
            <p className="text-white text-xl leading-relaxed mb-10 max-w-xl">
              Interactive data exploration of global income distribution across
              countries and regions — powered by Power BI and modern web
              technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-7 py-3.5 rounded-xl font-medium text-sm shadow-purple hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                View Dashboard <ArrowRight size={16} />
              </Link>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 bg-white hover:bg-purple-50 text-ink-700 border border-slate-border px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem / The Solution ───────────────── */}
      <section className="bg-slate-bg py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="bg-white rounded-2xl border border-slate-border shadow-card p-8 relative overflow-hidden group hover:shadow-card-hover transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-700 to-purple-300 rounded-l-2xl" />
              <div className="pl-2">
                {/* <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                  <AlertCircle size={12} />
                  The Problem
                </div> */}
                <h2 className="font-display text-2xl md:text-3xl text-ink-900 mb-5 leading-tight">
                  Income inequality is one of the most pressing global
                  challenges
                </h2>
                <div className="space-y-4 text-ink-500 text-sm leading-relaxed">
                  <p>
                    Across the world, wealth and income are distributed
                    unevenly, affecting access to education, healthcare, and
                    economic opportunities. Billions of people live in regions
                    where per-capita income is a fraction of that in wealthy
                    nations.
                  </p>
                  <p>
                    However, understanding these disparities can be difficult
                    because economic data is complex and scattered across
                    multiple sources — making it hard for most people to see the
                    full picture.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-purple-700 rounded-2xl shadow-purple p-8 relative overflow-hidden group hover:bg-purple-800 transition-all duration-300">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-30" />
              <div className="relative">
                {/* <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                  <Lightbulb size={12} />
                  The Solution
                </div> */}
                <h2 className="font-display text-2xl md:text-3xl text-white mb-5 leading-tight">
                  Our dashboard simplifies this complexity
                </h2>
                <p className="text-purple-100 text-sm leading-relaxed mb-6">
                  The Global Income Analysis Dashboard presents key economic
                  indicators through clear and interactive visualizations —
                  making complex data accessible to everyone.
                </p>
                <ul className="space-y-3">
                  {[
                    "Compare income distribution across countries",
                    "Analyze economic indicators like GDP and Gini Index",
                    "Identify trends and patterns in global inequality",
                    "Explore insights through intuitive charts and maps",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-purple-100"
                    >
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight size={10} className="text-white" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────── */}
      <section className="bg-purple-700 border-y border-purple-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-white mb-1">
                  {value}
                </div>
                <div className="text-purple-200 text-xs font-medium tracking-wide uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Can Explore ─────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            title="What You Can Explore"
            subtitle="Everything you need to understand global income distribution — in one interactive platform."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="group bg-slate-bg rounded-2xl border border-slate-border p-6 hover:border-purple-300 hover:bg-purple-50 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
              >
                {/* Number badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-border group-hover:border-purple-200 group-hover:bg-white flex items-center justify-center shadow-sm transition-colors">
                    <Icon size={20} className="text-purple-700" />
                  </div>
                  <span className="font-display text-3xl text-purple-100 group-hover:text-purple-200 transition-colors select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-semibold text-ink-900 text-base mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-ink-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Overview ─────────────────────────── */}
      <section className="bg-slate-bg py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Project Overview"
                title="Understanding global income patterns"
                subtitle="This project leverages World Bank data to map income distribution across 190+ countries and 6 major world regions, revealing economic patterns, inequalities, and trends."
              />
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-purple-700 font-medium text-sm hover:gap-3 transition-all"
              >
                Learn more about this project <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Globe,
                  title: "Global Insights",
                  desc: "High-level patterns surfaced from worldwide income data.",
                },
                {
                  icon: Map,
                  title: "Regional Comparisons",
                  desc: "Side-by-side analysis across continents and economic regions.",
                },
                {
                  icon: TrendingUp,
                  title: "Trend Analysis",
                  desc: "Longitudinal views showing income evolution over decades.",
                },
                {
                  icon: BarChart2,
                  title: "Structural Insights",
                  desc: "Understand underlying factors shaping global income inequality such as education, economic growth, and policy impact.",
                },
                
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl border border-slate-border p-5 hover:border-purple-200 hover:bg-purple-50 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-bg border border-slate-border group-hover:border-purple-200 flex items-center justify-center mb-3 shadow-sm transition-colors">
                    <Icon size={16} className="text-purple-700" />
                  </div>

                  <h4 className="font-semibold text-ink-900 text-sm mb-1.5">
                    {title}
                  </h4>
                  <p className="text-ink-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="bg-ink-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(116,78,194,0.2),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-mono tracking-widest uppercase text-purple-300 mb-4 block">
            Explore the Data
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 max-w-2xl mx-auto leading-tight">
            Ready to dive into the data?
          </h2>
          <p className="text-ink-300 mb-10 max-w-lg mx-auto">
            Interact with live Power BI visualizations and discover insights
            about global income inequality.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-600 text-white px-8 py-4 rounded-xl font-medium shadow-purple hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Open Dashboard <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
