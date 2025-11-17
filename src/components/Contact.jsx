import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [plan, setPlan] = useState('VOICE START')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)

    const payload = {
      name: form.get('name'),
      company: form.get('company'),
      email: form.get('email'),
      social_link: form.get('link'),
      message: form.get('message'),
      plan,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-[#05060A] text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_100%_0%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold">Get Your Free Custom Strategy</h2>
          <p className="text-white/70 mt-3">Tell us about your brand and goals — we’ll map a guaranteed-reach plan and share creator matches.</p>

          <div className="mt-8 rounded-2xl p-6 bg-white/5 border border-white/10">
            <div className="text-sm text-white/70">Selected plan:</div>
            <div className="mt-2 inline-flex items-center gap-2 p-1 rounded-full bg-white/10 border border-white/10">
              {['VOICE START','VOICE PRO','VOICE EMPIRE'].map((p) => (
                <button key={p} onClick={() => setPlan(p)} className={`px-3 py-1.5 rounded-full text-xs ${plan===p ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : ''}`}>{p}</button>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input name="name" required className="mt-1 w-full px-3 py-2 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-white/70">Company</label>
              <input name="company" className="mt-1 w-full px-3 py-2 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" name="email" required className="mt-1 w-full px-3 py-2 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-white/70">Link to social media</label>
              <input name="link" className="mt-1 w-full px-3 py-2 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-white/70">Message</label>
              <textarea name="message" rows="4" className="mt-1 w-full px-3 py-2 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <button disabled={status==='loading'} className="mt-6 w-full px-4 py-2.5 rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.55)] transition">
            {status==='loading' ? 'Submitting...' : 'Get Your Free Custom Strategy'}
          </button>
          {status==='success' && <p className="text-emerald-400 mt-3 text-sm">Thanks! We’ll be in touch shortly.</p>}
          {status==='error' && <p className="text-red-400 mt-3 text-sm">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
