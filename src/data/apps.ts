export type AppId = 'finder' | 'vscode' | 'terminal' | 'messages' | 'safari' | 'notes' | 'resume'

export type DesktopApp = {
  id: AppId
  label: string
  dockLabel: string
  icon: string
  windowTitle: string
  defaultW: number
  defaultH: number
}

export const DESKTOP_APPS: DesktopApp[] = [
  { id: 'finder', label: 'Finder', dockLabel: 'About', icon: '📁', windowTitle: 'About Yugesh', defaultW: 560, defaultH: 520 },
  { id: 'vscode', label: 'VS Code', dockLabel: 'Projects', icon: '💻', windowTitle: 'projects — AI & production', defaultW: 680, defaultH: 560 },
  { id: 'terminal', label: 'Terminal', dockLabel: 'Experience', icon: '⌨️', windowTitle: 'experience.log', defaultW: 580, defaultH: 480 },
  { id: 'messages', label: 'Messages', dockLabel: 'Contact', icon: '💬', windowTitle: 'Messages', defaultW: 440, defaultH: 420 },
  { id: 'safari', label: 'Safari', dockLabel: 'Kadal Work', icon: '🧭', windowTitle: 'work.kadal.cc — Qualkode', defaultW: 540, defaultH: 480 },
  { id: 'notes', label: 'Notes', dockLabel: 'Skills', icon: '📝', windowTitle: 'stack.txt', defaultW: 480, defaultH: 500 },
  { id: 'resume', label: 'Preview', dockLabel: 'Resume', icon: '📄', windowTitle: 'Yugesh_Resume.pdf', defaultW: 400, defaultH: 320 },
]

export function getApp(id: AppId) {
  return DESKTOP_APPS.find((a) => a.id === id)!
}
