import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { PROFILE } from '../data/content'
import { useStore } from '../store/useStore'

export function LoaderOverlay() {
  const loaded = useStore((s) => s.loaded)
  const setLoaded = useStore((s) => s.setLoaded)

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 1400)
    return () => window.clearTimeout(t)
  }, [setLoaded])

  if (loaded) return null

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[#1a1a2e] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className="text-sm text-white/50 mb-4">{PROFILE.shortName}&apos;s MacBook</p>
      <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      <p className="mt-6 text-lg font-medium">Starting desktop…</p>
    </motion.div>
  )
}
