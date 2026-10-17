import type { AppId } from '../data/apps'

const MENU_BAR = 36
const DOCK_RESERVE = 100
const MIN_MARGIN = 8

/** Fixed desktop slots — each app opens in its own zone. */
const SLOT_PERCENT: Record<AppId, { x: number; y: number }> = {
  finder: { x: 0.03, y: 0.09 },
  vscode: { x: 0.34, y: 0.08 },
  terminal: { x: 0.03, y: 0.4 },
  messages: { x: 0.58, y: 0.1 },
  safari: { x: 0.22, y: 0.12 },
  notes: { x: 0.55, y: 0.42 },
  resume: { x: 0.38, y: 0.24 },
}

export function getWindowSlot(appId: AppId): { x: number; y: number } {
  const vw = window.innerWidth
  const vh = window.innerHeight
  const slot = SLOT_PERCENT[appId]
  return {
    x: Math.round(vw * slot.x),
    y: Math.round(vh * slot.y),
  }
}

export function fitWindowSize(w: number, h: number): { w: number; h: number } {
  const vw = window.innerWidth
  const vh = window.innerHeight
  const maxW = Math.min(w, vw * 0.44)
  const maxH = Math.min(h, vh - MENU_BAR - DOCK_RESERVE - 24)
  return { w: Math.round(maxW), h: Math.round(maxH) }
}

/** Keep the full window (especially the title bar) inside the visible desktop. */
export function clampWindowBounds(
  x: number,
  y: number,
  w: number,
  h: number,
): { x: number; y: number } {
  const vw = window.innerWidth
  const vh = window.innerHeight
  const minY = MENU_BAR
  const maxY = Math.max(minY, vh - DOCK_RESERVE - h)
  const minX = MIN_MARGIN
  const maxX = Math.max(minX, vw - w - MIN_MARGIN)
  return {
    x: Math.min(maxX, Math.max(minX, x)),
    y: Math.min(maxY, Math.max(minY, y)),
  }
}

export function slotForApp(appId: AppId, w: number, h: number): { x: number; y: number } {
  const { x, y } = getWindowSlot(appId)
  return clampWindowBounds(x, y, w, h)
}
