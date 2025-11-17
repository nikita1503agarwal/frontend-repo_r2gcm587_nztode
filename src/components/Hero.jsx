import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay: d, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
})

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center bg-[#05060A] overflow-hidden">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Aurora + grid vibes */}
      <div className="absolute inset-0 pointer-events-none bg-aurora" />
      <div className="absolute inset-0 opacity-[0.12] bg-grid" />

      {/* Floating glow orbs */}
      <div className="absolute -left-20 top-24 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-500/40 to-purple-500/30 blur-3xl animate-float" />
      <div className="absolute right-[-60px] bottom-10 w-56 h-56 rounded-full bg-gradient-to-tr from-cyan-400/30 to-indigo-500/30 blur-3xl animate-float-slow" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-white/80 text-xs mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)] animate-pulse-soft" />
          Performance Influencer Engine
        </motion.div>

        <motion.h1
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white neon-text"
        >
          Guaranteed TikTok Views. Zero Risk. Pure Attention.
        </motion.h1>

        <motion.p
          variants={fadeUp(0.25)}
          initial="hidden"
          animate="show"
          className="mt-6 text-base sm:text-lg text-white/80 max-w-3xl mx-auto"
        >
          VOICE is a performance-driven influencer engine by Vasić Media. We deliver guaranteed monthly views on TikTok using 100+ trusted creators. Your brand grows. We take the risk.
        </motion.p>

        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium shadow-[0_0_35px_rgba(79,70,229,0.45)] hover:shadow-[0_0_45px_rgba(99,102,241,0.6)] transition animate-gradient-x">
            Get the Strategy for Free
          </a>
          <a href="#pricing" className="px-6 py-3 rounded-md bg-white/10 border border-white/10 text-white hover:bg-white/15 transition">See Pricing</a>
        </motion.div>

        {/* Creator grid mock */}
        <motion.div
          variants={fadeUp(0.55)}
          initial="hidden"
          animate="show"
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 opacity-95"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 250, damping: 18 }}
              className="aspect-[9/16] rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
              <div className="absolute -inset-1 rounded-xl neon-ring opacity-0 group-hover:opacity-100 pointer-events-none" />
              <div className="w-full h-full flex items-end p-2">
                <div className="w-8 h-8 rounded-full bg-white/20 border border-white/10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* KPI cards */}
        <motion.div
          variants={fadeUp(0.7)}
          initial="hidden"
          animate="show"
          className="mt-8 mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: 'Views this month', value: '12.4M' },
            { label: 'Creators active', value: '132' },
            { label: 'Avg. CPM', value: '€3.10' },
            { label: 'Ad-ready edits', value: '28' },
          ].map((kpi, idx) => (
            <motion.div
              key={kpi.label}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="rounded-xl glass p-4 text-left text-white/80"
            >
              <div className="text-xs uppercase tracking-wide text-white/60">{kpi.label}</div>
              <div className="text-2xl font-semibold text-white mt-1">{kpi.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
