import { AnimatePresence } from 'framer-motion'
import { useStore } from '../store/useStore'
import { DesktopWidgets } from './DesktopWidgets'
import { Dock } from './Dock'
import { MacWindow } from './MacWindow'
import { MenuBar } from './MenuBar'

export function Desktop() {
  const windows = useStore((s) => s.windows)
  const loaded = useStore((s) => s.loaded)

  if (!loaded) return null

  return (
    <div className="fixed inset-0 overflow-hidden mac-wallpaper">
      <MenuBar />
      <DesktopWidgets />
      <AnimatePresence>
        {windows.map((win) => (
          <MacWindow key={win.id} win={win} />
        ))}
      </AnimatePresence>
      <Dock />
    </div>
  )
}
