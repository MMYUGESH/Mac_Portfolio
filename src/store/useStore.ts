import { create } from 'zustand'
import type { AppId } from '../data/apps'
import { getApp } from '../data/apps'
import { fitWindowSize, getWindowSlot } from '../desktop/windowLayout'

export type WindowInstance = {
  id: string
  appId: AppId
  x: number
  y: number
  w: number
  h: number
  z: number
  minimized: boolean
}

type Store = {
  loaded: boolean
  setLoaded: (v: boolean) => void
  windows: WindowInstance[]
  topZ: number
  openApp: (appId: AppId) => void
  closeWindow: (id: string) => void
  focusWindow: (id: string) => void
  minimizeWindow: (id: string) => void
  moveWindow: (id: string, x: number, y: number) => void
}

let winCounter = 0

export const useStore = create<Store>((set, get) => ({
  loaded: false,
  setLoaded: (v) => set({ loaded: v }),
  windows: [],
  topZ: 10,
  openApp: (appId) => {
    const existing = get().windows.find((w) => w.appId === appId && !w.minimized)
    if (existing) {
      get().focusWindow(existing.id)
      return
    }
    const app = getApp(appId)
    const n = winCounter++
    const z = get().topZ + 1
    const { x, y } = getWindowSlot(appId)
    const { w, h } = fitWindowSize(app.defaultW, app.defaultH)
    set({
      topZ: z,
      windows: [
        ...get().windows,
        {
          id: `win-${appId}-${n}`,
          appId,
          x,
          y,
          w,
          h,
          z,
          minimized: false,
        },
      ],
    })
  },
  closeWindow: (id) => set({ windows: get().windows.filter((w) => w.id !== id) }),
  focusWindow: (id) => {
    const z = get().topZ + 1
    set({
      topZ: z,
      windows: get().windows.map((w) => (w.id === id ? { ...w, z, minimized: false } : w)),
    })
  },
  minimizeWindow: (id) =>
    set({
      windows: get().windows.map((w) => (w.id === id ? { ...w, minimized: true } : w)),
    }),
  moveWindow: (id, x, y) =>
    set({
      windows: get().windows.map((w) => (w.id === id ? { ...w, x, y } : w)),
    }),
}))
