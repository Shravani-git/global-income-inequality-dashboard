import {
  Globe,
  TrendingUp,
  AlertTriangle,
  BarChart2,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";
import InsightCard from "../components/InsightCard";
import SectionHeader from "../components/SectionHeader";
const insights = [
  {
    number: 1,
    icon: AlertTriangle,
    accent: "purple",
    title: "Extreme Income Inequality",
    description:
      "Colombia records the highest income inequality in the dataset with a Gini Index of 53.9, while Belarus shows one of the most balanced distributions at 24.4, highlighting large differences in national income structures.",
  },
  {
    number: 2,
    icon: DollarSign,
    accent: "mid",
    title: "High Income Concentration",
    description:
      "In countries like Colombia and Brazil, the richest 10% control more than 40% of national income, while the poorest 10% receive around 1–2%, showing a significant concentration of wealth among top earners.",
  },
  {
    number: 3,
    icon: TrendingUp,
    accent: "light",
    title: "Rapid Growth in Emerging Economies",
    description:
      "China shows the strongest economic expansion in the dataset, with GDP increasing by more than 4.5× over the observed period. Other fast-growing economies include Armenia, Georgia, and Albania.",
  },
  {
    number: 4,
    icon: Globe,
    accent: "purple",
    title: "Large Income Distribution Gaps",
    description:
      "In several economies such as Colombia, Panama, and Costa Rica, the top 20% of the population capture nearly half of total national income while the bottom 20% receive less than 5%.",
  },
  {
    number: 5,
    icon: BarChart2,
    accent: "mid",
    title: "Global Inequality Gradually Declining",
    description:
      "The global average Gini index decreased from about 38.3 in 2000 to around 34.9 in 2023, suggesting gradual improvement in income distribution despite persistent disparities between countries.",
  },
  {
    number: 6,
    icon: ArrowUpRight,
    accent: "light",
    title: "Persistent Poverty in Some Economies",
    description:
      "Countries such as Indonesia and the Philippines show poverty rates above 50% in the dataset, highlighting ongoing development challenges despite global economic growth.",
  },
];

const summaryStats = [
  {
    label: "Highest Inequality",
    value: "Colombia",
    sub: "Gini Index: 53.9 (2023)",
  },
  {
    label: "Lowest Inequality",
    value: "Belarus",
    sub: "Gini Index: 24.4 (2023)",
  },
  {
    label: "Highest Median Income",
    value: "Luxembourg",
    sub: "Median Income: $89K (PPP)",
  },
  {
    label: "Fastest GDP Growth",
    value: "China",
    sub: "GDP Growth: 4.58× (2000–2023)",
  },
];

export default function Insights() {
  
  return (
    <div>
      {/* Header */}
      <section className="bg-white border-b border-slate-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <span className="text-xs font-mono tracking-widest uppercase text-purple-700 mb-3 block">
            Data Findings
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-ink-900 mb-4">
            Key Insights from the Data
          </h1>
          <p className="text-ink-500 text-lg max-w-2xl">
            Patterns, anomalies, and takeaways surfaced through analysis of
            World Bank global income data spanning 30+ years.
          </p>
        </div>
      </section>

      {/* Summary stats */}
      <section className="bg-purple-50 border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {summaryStats.map(({ label, value, sub }) => (
              <div key={label}>
                <p className="text-xs font-mono text-purple-700 uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p className="font-display text-xl text-ink-900">{value}</p>
                <p className="text-xs text-ink-400 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insight cards */}
      <section className="bg-slate-bg py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight) => (
              <InsightCard key={insight.number} {...insight} />
            ))}
          </div>
        </div>
      </section>

      {/* Narrative */}
      {/* Narrative + Aside */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Narrative */}
            <div className="lg:col-span-2 max-w-3xl">
              <SectionHeader
                eyebrow="The Big Picture"
                title="What the data tells us"
                subtitle="Taken together, these insights paint a complex picture of global economic development — one of simultaneous progress and persistent inequality."
              />

              <div className="space-y-4 text-ink-500 text-sm leading-relaxed">
                <p>
                  While aggregate global income has risen substantially since
                  1990, the distribution of that growth has been deeply uneven.
                  High-income countries have maintained their lead, while the
                  path toward convergence for lower-income nations remains slow
                  and fragile.
                </p>
                <p>
                  The data also highlights the importance of institutional
                  quality, infrastructure investment, and human capital
                  development as predictors of sustainable income growth —
                  factors that vary enormously across the regions analyzed.
                </p>
              </div>
            </div>

            {/* Right: Aside Download Section */}
            {/* Right: Aside Download Section */}
            <aside className="space-y-6">
              {/* Data Overview */}
              <div className="bg-white border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-ink-700">
                  Data Overview
                </h3>

                <ul className="text-sm text-gray-600 space-y-2 leading-relaxed list-disc list-inside mb-5">
                  <li>
                    <span className="font-medium text-gray-800">Sources:</span>{" "}
                    World Bank & Our World in Data
                  </li>
                  <li>
                    <span className="font-medium text-gray-800">
                      Countries:
                    </span>{" "}
                    54
                  </li>
                  <li>
                    <span className="font-medium text-gray-800">Regions:</span>{" "}
                    6
                  </li>
                  <li>
                    <span className="font-medium text-gray-800">
                      Indicators:
                    </span>{" "}
                    10 key socio-economic indicators
                  </li>
                  <li>
                    <span className="font-medium text-gray-800">
                      Time Period:
                    </span>{" "}
                    2000–2023
                  </li>
                  <li>
                    <span className="font-medium text-gray-800">Process:</span>{" "}
                    Data cleaned and integrated into a unified master dataset
                  </li>
                </ul>

                {/* Download Buttons */}
                {/* <div className="flex flex-col gap-2">
                  <a
                    href="../assets/files/documentation.pdf"
                    download
                    className="text-center bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                  >
                    Download Documentation
                  </a>
              

                  <a
                    href="../assets/files/dataset.csv"
                    download
                    className="text-center border border-gray-300 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
                  >
                    Download Dataset
                  </a>
                </div> */}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
