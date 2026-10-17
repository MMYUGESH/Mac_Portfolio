import { motion } from 'framer-motion'
import { DESKTOP_APPS, type AppId } from '../data/apps'
import { useStore } from '../store/useStore'

export function Dock() {
  const openApp = useStore((s) => s.openApp)
  const windows = useStore((s) => s.windows)

  const isOpen = (id: AppId) => windows.some((w) => w.appId === id && !w.minimized)

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[200] px-3 py-2 rounded-2xl bg-white/15 backdrop-blur-2xl border border-white/20 shadow-2xl">
      <p className="text-center text-[10px] text-white/50 mb-2 hidden sm:block">
        Click an app to open
      </p>
      <div className="flex items-end gap-1 sm:gap-2">
        {DESKTOP_APPS.map((app) => (
          <motion.button
            key={app.id}
            type="button"
            title={app.dockLabel}
            className="group flex flex-col items-center gap-1 px-2 py-1 rounded-xl hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.12, y: -6 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openApp(app.id)}
          >
            <span className="text-3xl sm:text-4xl drop-shadow-lg">{app.icon}</span>
            <span className="text-[10px] text-white/90 font-medium max-w-[4.5rem] truncate">
              {app.dockLabel}
            </span>
            {isOpen(app.id) && <span className="w-1 h-1 rounded-full bg-white/80" />}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
