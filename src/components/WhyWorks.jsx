export default function WhyWorks() {
  const items = [
    {
      title: 'Micro-influencers outperform ads',
      desc: 'Creators with niche trust deliver better watch time and conversion compared to generic ads.'
    },
    {
      title: 'Authentic content → higher trust',
      desc: 'Native storytelling beats polished commercials, driving more meaningful attention.'
    },
    {
      title: 'CPM up to 70% lower than Meta ads',
      desc: 'Efficient reach at scale thanks to our vetted creator network and performance contracts.'
    },
    {
      title: 'Guaranteed reach eliminates risk',
      desc: 'We shoulder the delivery risk — you get predictable outcomes month after month.'
    },
    {
      title: 'Full creative system included',
      desc: 'Briefs, hooks, editing, iteration — a complete growth engine rather than a one-off campaign.'
    },
  ]

  return (
    <section id="why" className="relative bg-[#0A0B10] text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_10%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-5xl font-bold">Why VOICE Works</h2>
            <p className="text-white/70 mt-4">Data-proven advantages that compound. Build momentum with guaranteed reach and creative iteration.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              {[12, 24, 48, 96].map((v, i) => (
                <div key={i} className="rounded-xl p-4 bg-white/5 border border-white/10">
                  <div className="text-xs text-white/60">Growth after {i+1} mo</div>
                  <div className="mt-1 text-2xl font-semibold">{v}%</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {items.map((it) => (
              <div key={it.title} className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur">
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="text-white/70 mt-2 text-sm">{it.desc}</p>
                <div className="mt-4 h-16 w-full rounded-md bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
