import { SKILL_GROUPS } from '../data/content'

const CARD_STYLES = [
  'from-violet-500/15 to-fuchsia-500/10 border-violet-400/30',
  'from-cyan-500/15 to-blue-500/10 border-cyan-400/30',
  'from-amber-500/15 to-orange-500/10 border-amber-400/30',
  'from-emerald-500/15 to-teal-500/10 border-emerald-400/30',
  'from-rose-500/15 to-pink-500/10 border-rose-400/30',
  'from-indigo-500/15 to-sky-500/10 border-indigo-400/30',
  'from-lime-500/15 to-green-500/10 border-lime-400/30',
  'from-slate-500/15 to-gray-500/10 border-slate-400/30',
  'from-teal-500/15 to-cyan-500/10 border-teal-400/30',
]

const CATEGORY_ICONS: Record<string, string> = {
  'AI / ML': '🧠',
  Languages: '📝',
  Frontend: '⚛️',
  'Backend & APIs': '🔌',
  Databases: '🗄️',
  'Cloud & DevOps': '☁️',
  'Automation & Testing': '🤖',
  'Integrations & Messaging': '🔗',
  'Dev Tools & Workflow': '🛠️',
}

export function SkillsView() {
  return (
    <div className="-m-4 p-5 min-h-full bg-gradient-to-br from-slate-50 via-white to-violet-50">
      <p className="font-mono text-xs text-violet-600 mb-1">~/skills — loaded</p>
      <h2 className="text-2xl font-black text-gray-900 tracking-tight">Tech arsenal</h2>
      <p className="text-sm text-gray-600 mt-1 mb-5">Production stack for AI products & full-stack delivery</p>

      <div className="space-y-4">
        {SKILL_GROUPS.map((g, i) => (
          <div
            key={g.category}
            className={`rounded-xl border bg-gradient-to-br p-4 shadow-sm ${CARD_STYLES[i % CARD_STYLES.length]}`}
          >
            <p className="text-sm font-bold text-gray-800 flex items-center gap-2">
              <span className="text-lg">{CATEGORY_ICONS[g.category] ?? '✦'}</span>
              {g.category}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {g.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-semibold px-3 py-1.5 rounded-full bg-white/80 text-gray-800 shadow-sm border border-white/60 hover:scale-105 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs font-mono text-gray-400">
        // always shipping · learning · optimizing
      </p>
    </div>
  )
}
