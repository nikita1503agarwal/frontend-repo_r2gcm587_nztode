export default function CaseStudies() {
  const cases = [
    { brand: 'Lidl', desc: '130 creators, 150M total views' },
    { brand: 'AVON', desc: '2M guaranteed monthly' },
    { brand: 'A1', desc: '2–3M campaign bursts' },
    { brand: 'Neoplanta', desc: 'Creative challenges with viral results' },
  ]

  return (
    <section id="cases" className="relative bg-[#05060A] text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_90%_0%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-bold">Case Studies</h2>
        <p className="text-white/70 mt-3 max-w-2xl">Highlights from campaigns powered by our creator engine.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => (
            <div key={c.brand} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-video w-full bg-gradient-to-br from-white/10 to-transparent" />
              <div className="p-5">
                <div className="text-lg font-semibold">{c.brand}</div>
                <div className="text-white/70 text-sm">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
