import { TrendingUp, ChartBar as BarChart3, Wallet, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Header */}
      <header className="border-b border-white/5 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Folio</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#" className="transition-colors hover:text-white">Dashboard</a>
            <a href="#" className="transition-colors hover:text-white">Markets</a>
            <a href="#" className="transition-colors hover:text-white">Portfolio</a>
            <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live market data
          </div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Track your portfolio
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              in real time
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            A clean, modern dashboard for monitoring your investments with live charts,
            performance insights, and smart analytics.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-400">
              Launch Dashboard
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard icon={<BarChart3 className="h-5 w-5" />} label="Total Value" value="$48,250.30" change="+2.4%" />
          <StatCard icon={<Wallet className="h-5 w-5" />} label="Available Cash" value="$12,800.00" change="+0.8%" />
          <StatCard icon={<TrendingUp className="h-5 w-5" />} label="Today's P&L" value="+$1,240.50" change="+1.2%" />
        </div>
      </section>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  change,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-colors hover:border-white/10">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
          {icon}
        </div>
        <div>
          <p className="text-sm text-neutral-400">{label}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
        <span className="ml-auto text-sm font-medium text-emerald-400">{change}</span>
      </div>
    </div>
  );
}
