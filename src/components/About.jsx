export default function About() {
  return (
    <section id="about" className="relative bg-[#0A0B10] text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_0%_0%,rgba(56,189,248,0.1),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold">About Vasić Media</h2>
          <p className="text-white/70 mt-4">Leading marketing agency in Serbia known for short-form video innovation and trusted by major brands. Creator of VOICE – the first guaranteed TikTok influencer engine.</p>
          <ul className="mt-6 space-y-3 text-white/80">
            <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400" />Short-form pioneers with proven playbooks</li>
            <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400" />Trusted by enterprise brands across verticals</li>
            <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400" />Full-stack production and growth strategy</li>
          </ul>
        </div>
        <div className="rounded-2xl min-h-[260px] bg-white/5 border border-white/10" />
      </div>
    </section>
  )
}
