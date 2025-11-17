import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#05060A] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%),radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.10),transparent_40%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs mb-6 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          Performance Influencer Engine
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(59,130,246,0.35)]">
          Guaranteed TikTok Views. Zero Risk. Pure Attention.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
          VOICE is a performance-driven influencer engine by Vasić Media. We deliver guaranteed monthly views on TikTok using 100+ trusted creators. Your brand grows. We take the risk.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium shadow-[0_0_35px_rgba(79,70,229,0.45)] hover:shadow-[0_0_45px_rgba(99,102,241,0.6)] transition">Get the Strategy for Free</a>
          <a href="#pricing" className="px-6 py-3 rounded-md bg-white/10 border border-white/10 text-white hover:bg-white/15 transition">See Pricing</a>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 opacity-90">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="aspect-[9/16] rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-white/10 to-transparent flex items-end p-2">
                <div className="w-8 h-8 rounded-full bg-white/20 border border-white/10" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Views this month', value: '12.4M' },
            { label: 'Creators active', value: '132' },
            { label: 'Avg. CPM', value: '€3.10' },
            { label: 'Ad-ready edits', value: '28' },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-xl bg-white/5 border border-white/10 p-4 text-left text-white/80">
              <div className="text-xs uppercase tracking-wide text-white/60">{kpi.label}</div>
              <div className="text-2xl font-semibold text-white mt-1">{kpi.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
