import { Users, Video, Eye, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Users,
    title: 'We pick the perfect micro-influencers',
    desc: 'Data-backed creator selection across 100+ trusted partners matched to your audience and goals.'
  },
  {
    icon: Video,
    title: 'They create and post 20–40 videos monthly',
    desc: 'Always-on short-form content engine produced natively for TikTok with built-in iteration.'
  },
  {
    icon: Eye,
    title: 'We guarantee a minimum number of views',
    desc: 'Performance contracts with make-good guarantees so you only pay for real reach.'
  },
  {
    icon: BarChart3,
    title: 'You receive full reporting and ad-ready creatives',
    desc: 'Transparent dashboards, weekly recaps, and exportable assets ready for paid distribution.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-[#0A0B10] text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">How VOICE Works</h2>
        <p className="text-white/70 max-w-2xl">A simple system designed for performance. Clear steps, full accountability.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur hover:bg-white/7 transition relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-3xl group-hover:blur-[36px] transition" />
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 shadow-[0_0_24px_rgba(99,102,241,0.4)] mb-4">
                <Icon className="text-white" size={22} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-white/70 text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
