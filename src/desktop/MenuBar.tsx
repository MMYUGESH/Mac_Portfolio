import { useEffect, useState } from 'react'
import { PROFILE } from '../data/content'

export function MenuBar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const d = new Date()
      setTime(
        d.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true }),
      )
    }
    tick()
    const id = window.setInterval(tick, 30_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[200] h-8 flex items-center justify-between px-4 text-[13px] font-medium text-white/95 bg-black/35 backdrop-blur-xl border-b border-white/10"
    >
      <div className="flex items-center gap-4">
        <span className="font-semibold">🍎</span>
        <span className="font-semibold">{PROFILE.shortName}</span>
        <span className="hidden sm:inline text-white/70">File</span>
        <span className="hidden sm:inline text-white/70">Edit</span>
        <span className="hidden md:inline text-white/70">View</span>
      </div>
      <div className="flex items-center gap-4 text-white/80">
        <span className="hidden sm:inline text-[11px] uppercase tracking-wider">Qualkode · AI</span>
        <span className="tabular-nums">{time || '--:--'}</span>
      </div>
    </header>
  )
}
