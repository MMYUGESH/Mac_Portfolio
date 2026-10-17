import type { AppId } from '../data/apps'
import {
  IMPACT_HIGHLIGHTS,
  KADAL_STUDIO,
  LINKS,
  PROFILE,
  PROJECTS,
  RESEARCH_PROJECTS,
} from '../data/content'
import { ExperienceView } from './ExperienceView'
import { SkillsView } from './SkillsView'

export function WindowBody({ appId }: { appId: AppId }) {
  switch (appId) {
    case 'finder':
      return (
        <div className="space-y-5 text-[15px] leading-relaxed text-gray-800">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{PROFILE.name}</h2>
            <p className="text-lg text-gray-600 mt-1">{PROFILE.role}</p>
            <p className="mt-3 text-gray-800">{PROFILE.headline}</p>
            <p className="mt-2 text-gray-700">{PROFILE.bio}</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Key experience & impact</p>
            <ul className="space-y-3">
              {IMPACT_HIGHLIGHTS.map((h) => (
                <li key={h.area} className="border-l-2 border-violet-500 pl-3">
                  <span className="font-semibold text-gray-900">→ {h.area}:</span>{' '}
                  <span className="text-gray-700">{h.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm text-gray-700 space-y-1">
            <p><strong>Email:</strong> {PROFILE.email}</p>
            <p><strong>Education:</strong> {PROFILE.education}</p>
            <p className="text-gray-600 pt-2">{PROFILE.openToRoles}</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href={PROFILE.github} className="text-blue-600 hover:underline font-medium" target="_blank" rel="noreferrer">GitHub</a>
            <a href={PROFILE.linkedin} className="text-blue-600 hover:underline font-medium" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={LINKS.kadalWork} className="text-blue-600 hover:underline font-medium" target="_blank" rel="noreferrer">Kadal Work</a>
          </div>
        </div>
      )
    case 'vscode':
      return (
        <div className="space-y-6 font-mono text-[13px]">
          <section>
            <p className="text-violet-600 font-bold mb-3">// production @ Qualkode</p>
            {PROJECTS.filter((p) => p.company?.includes('Qualkode') || p.company?.includes('MessageBlue')).map((p) => (
              <div key={p.title} className="border-l-2 border-violet-500 pl-3 py-2 mb-3">
                <p className="text-base font-bold text-gray-900">{p.title}</p>
                <p className="text-gray-500 text-xs">{p.company}{p.period ? ` · ${p.period}` : ''}</p>
                <p className="text-gray-700 mt-1">{p.description}</p>
                <p className="text-blue-600 mt-1 text-xs">{p.tech.join(' · ')}</p>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-xs text-violet-600 hover:underline mt-1 inline-block">
                    Open →
                  </a>
                )}
              </div>
            ))}
          </section>
          <section>
            <p className="text-emerald-600 font-bold mb-3">// M.Tech AI research & projects</p>
            {RESEARCH_PROJECTS.map((p) => (
              <div key={p.title} className="border-l-2 border-emerald-500 pl-3 py-2 mb-3">
                <p className="text-base font-bold text-gray-900">{p.title}</p>
                <p className="text-gray-700 mt-1">{p.description}</p>
                <p className="text-emerald-700 mt-1 text-xs">{p.tech.join(' · ')}</p>
              </div>
            ))}
          </section>
          <section>
            <p className="text-gray-500 font-bold mb-3">// earlier product work</p>
            {PROJECTS.filter((p) => p.company === 'cluBITS').map((p) => (
              <div key={p.title} className="border-l-2 border-gray-400 pl-3 py-1 mb-2">
                <p className="font-bold text-gray-900">{p.title}</p>
                <p className="text-gray-600 text-xs">{p.description}</p>
              </div>
            ))}
          </section>
        </div>
      )
    case 'terminal':
      return <ExperienceView />
    case 'messages':
      return (
        <div className="space-y-5">
          <p className="text-xl font-bold text-gray-900">Let’s talk</p>
          <a href={`mailto:${PROFILE.email}`} className="block text-2xl font-bold text-blue-600 hover:underline break-all">
            {PROFILE.email}
          </a>
          <p className="text-base text-gray-600">{PROFILE.phone}</p>
          <div className="rounded-xl bg-gray-100 border border-gray-200 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Open to</p>
            <p className="text-base text-gray-800 leading-relaxed font-medium">{PROFILE.openToRoles}</p>
          </div>
        </div>
      )
    case 'safari':
      return (
        <div className="space-y-5 text-[15px]">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span>🌊</span> {KADAL_STUDIO.title}
            </h3>
            <p className="text-gray-600 mt-1">{KADAL_STUDIO.subtitle}</p>
          </div>
          <p className="text-gray-800 leading-relaxed">{KADAL_STUDIO.description}</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2">
            <a
              href={LINKS.kadalWork}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-2.5 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 text-center"
            >
              work.kadal.cc →
            </a>
            <a
              href={LINKS.kadalHome}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-2.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 text-center"
            >
              kadal.cc
            </a>
          </div>
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-gray-700">
            <p className="font-semibold text-gray-900 mb-2">🧪 On the work site</p>
            <ul className="space-y-1.5 list-none">
              <li>▸ Production AI case studies & shipped product stories</li>
              <li>▸ Studio services — agents, full builds, performance rescue</li>
              <li>▸ Independent portfolio — co-built with a colleague</li>
            </ul>
          </div>
        </div>
      )
    case 'notes':
      return <SkillsView />
    case 'resume':
      return (
        <div className="text-center space-y-4 py-4">
          <p className="text-4xl">📄</p>
          <p className="text-xl font-bold text-gray-900">Yugesh_Resume.pdf</p>
          <p className="text-gray-600">AI Product Engineer · Full-Stack Developer</p>
          <a
            href={PROFILE.resumePath}
            download
            className="inline-block mt-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800"
          >
            Download PDF
          </a>
        </div>
      )
    default:
      return null
  }
}
