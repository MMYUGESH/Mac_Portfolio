import { motion } from 'framer-motion'
import { useCallback, useRef, type PointerEvent as ReactPointerEvent } from 'react'
import { getApp } from '../data/apps'
import type { WindowInstance } from '../store/useStore'
import { useStore } from '../store/useStore'
import { WindowBody } from './windowContent'

type Props = {
  win: WindowInstance
}

export function MacWindow({ win }: Props) {
  const app = getApp(win.appId)
  const closeWindow = useStore((s) => s.closeWindow)
  const focusWindow = useStore((s) => s.focusWindow)
  const minimizeWindow = useStore((s) => s.minimizeWindow)
  const moveWindow = useStore((s) => s.moveWindow)
  const drag = useRef<{ startX: number; startY: number; ox: number; oy: number } | null>(null)

  const onPointerDown = useCallback(
    (e: ReactPointerEvent) => {
      focusWindow(win.id)
      if ((e.target as HTMLElement).closest('[data-drag-handle]')) {
        drag.current = { startX: e.clientX, startY: e.clientY, ox: win.x, oy: win.y }
        ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
      }
    },
    [focusWindow, win.id, win.x, win.y],
  )

  const onPointerMove = useCallback(
    (e: ReactPointerEvent) => {
      if (!drag.current) return
      const dx = e.clientX - drag.current.startX
      const dy = e.clientY - drag.current.startY
      moveWindow(win.id, drag.current.ox + dx, drag.current.oy + dy)
    },
    [moveWindow, win.id],
  )

  const onPointerUp = useCallback(() => {
    drag.current = null
  }, [])

  if (win.minimized) return null

  const isTerminal = win.appId === 'terminal'

  return (
    <motion.div
      role="dialog"
      className="absolute flex flex-col rounded-xl overflow-hidden shadow-2xl border border-black/10 bg-[#f5f5f7]"
      style={{
        left: win.x,
        top: win.y,
        width: win.w,
        height: win.h,
        zIndex: win.z,
        maxWidth: 'calc(100vw - 24px)',
        maxHeight: 'calc(100vh - 120px)',
      }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onPointerDown={() => focusWindow(win.id)}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div
        data-drag-handle
        className="flex items-center gap-2 px-3 h-9 bg-[#e8e8ed] border-b border-black/5 cursor-grab active:cursor-grabbing shrink-0"
        onPointerDown={onPointerDown}
      >
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90"
          aria-label="Close"
          onClick={() => closeWindow(win.id)}
        />
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-90"
          aria-label="Minimize"
          onClick={() => minimizeWindow(win.id)}
        />
        <button type="button" className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-90" aria-label="Zoom" />
        <span className="flex-1 text-center text-xs font-semibold text-gray-600 truncate pr-12">
          {app.windowTitle}
        </span>
      </div>
      <div
        className={`flex-1 overflow-y-auto p-4 ${isTerminal ? 'p-0 bg-[#1e1e1e]' : ''}`}
      >
        <WindowBody appId={win.appId} />
      </div>
    </motion.div>
  )
}
