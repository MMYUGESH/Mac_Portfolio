import type { AppId } from '../data/apps'

/** Fixed desktop slots so each app opens in its own zone (no stacked pile). */
const SLOT_PERCENT: Record<AppId, { x: number; y: number }> = {
  finder: { x: 0.03, y: 0.07 },
  vscode: { x: 0.34, y: 0.06 },
  terminal: { x: 0.03, y: 0.42 },
  messages: { x: 0.58, y: 0.08 },
  safari: { x: 0.34, y: 0.38 },
  notes: { x: 0.58, y: 0.44 },
  resume: { x: 0.42, y: 0.22 },
}

export function getWindowSlot(appId: AppId): { x: number; y: number } {
  const vw = window.innerWidth
  const vh = window.innerHeight
  const slot = SLOT_PERCENT[appId]
  const menuBar = 32
  const dock = 100
  const maxY = vh - dock - 120
  return {
    x: Math.max(12, Math.min(vw - 280, Math.round(vw * slot.x))),
    y: Math.max(menuBar, Math.min(maxY, Math.round(vh * slot.y))),
  }
}

export function fitWindowSize(w: number, h: number): { w: number; h: number } {
  const vw = window.innerWidth
  const vh = window.innerHeight
  const maxW = Math.min(w, vw * 0.42)
  const maxH = Math.min(h, vh - 160)
  return { w: Math.round(maxW), h: Math.round(maxH) }
}
