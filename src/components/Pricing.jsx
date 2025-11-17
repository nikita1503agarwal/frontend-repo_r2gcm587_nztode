import { useState } from 'react'

const plans = [
  {
    name: 'VOICE START',
    price: '€1,990/mo',
    features: [
      '1M guaranteed views',
      '20–25 influencer videos',
      '2 ad-ready videos',
      'Roll-over once every 3 months',
      'Monthly reporting',
    ],
    highlight: false,
  },
  {
    name: 'VOICE PRO',
    price: '€3,480/mo',
    features: [
      '2M guaranteed views',
      '40+ videos',
      '5 ad-ready videos',
      'Growth sprint',
      'VOICE Originals (studio production)',
      'Test campaigns for new products',
    ],
    highlight: true,
  },
  {
    name: 'VOICE EMPIRE',
    price: 'Custom',
    features: [
      '5M–20M+ views',
      'Full creative team',
      'Studio production',
      'Dedicated coordinator',
      'Monthly experiments & scaling',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')

  return (
    <section id="pricing" className="relative bg-[#05060A] text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">Pricing</h2>
          <p className="text-white/70 mt-3 max-w-2xl">Productized plans designed like SaaS. Guaranteed reach, transparent deliverables.</p>

          <div className="mt-6 inline-flex items-center gap-2 p-1 rounded-full bg-white/10 border border-white/10">
            <button onClick={() => setBilling('monthly')} className={`px-4 py-1.5 rounded-full text-sm ${billing==='monthly' ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : ''}`}>Monthly</button>
            <button onClick={() => setBilling('quarterly')} className={`px-4 py-1.5 rounded-full text-sm ${billing==='quarterly' ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : ''}`}>Quarterly</button>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl p-6 bg-white/5 border ${plan.highlight ? 'border-indigo-400/60' : 'border-white/10'} backdrop-blur overflow-hidden`}> 
              {plan.highlight && <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-indigo-500/10 to-transparent" />}
              <div className="relative">
                <h3 className="text-lg font-semibold tracking-wide">{plan.name}</h3>
                <div className="mt-3 text-4xl font-bold">
                  {plan.price}
                </div>
                <ul className="mt-6 space-y-3 text-white/80">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-8 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.55)] transition">Get Started</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
