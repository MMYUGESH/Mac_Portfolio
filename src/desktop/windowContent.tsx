import type { AppId } from '../data/apps'
import {
  EXPERIENCES,
  IMPACT_HIGHLIGHTS,
  LINKS,
  PROFILE,
  PROJECTS,
  RESEARCH_PROJECTS,
  SKILL_GROUPS,
} from '../data/content'

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
            {PROJECTS.filter((p) => p.company?.includes('Qualkode') || p.company?.includes('MessageBlue') || p.company?.includes('Kadal')).map((p) => (
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
      return (
        <div className="font-mono text-[13px] text-green-400 bg-[#1e1e1e] -m-4 p-4 min-h-full">
          <p className="text-gray-500">$ cat experience.log</p>
          {EXPERIENCES.map((e) => (
            <div key={e.id} className="mt-4 border-b border-gray-700 pb-3">
              <p className="text-white font-bold">{e.company}</p>
              <p className="text-gray-400">{e.role} · {e.period}</p>
              <ul className="mt-2 text-gray-300 list-disc pl-4">
                {e.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )
    case 'messages':
      return (
        <div className="space-y-4">
          <p className="text-lg font-semibold text-gray-900">Let’s talk</p>
          <a href={`mailto:${PROFILE.email}`} className="block text-2xl font-bold text-blue-600 hover:underline break-all">
            {PROFILE.email}
          </a>
          <p className="text-gray-600">{PROFILE.phone}</p>
          <p className="text-gray-700 leading-relaxed">{PROFILE.openToRoles}</p>
        </div>
      )
    case 'safari':
      return (
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Kadal · Qualkode client work</h3>
            <p className="text-gray-600 text-sm mt-1">Chennai AI product studio — production case studies & shipped products</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            I build production AI at <strong>Qualkode Technologies</strong> alongside the Kadal studio team.
            Our work portfolio includes MessageBlue, Blush, Toldo, and more — end-to-end agents, infrastructure, and interfaces shipped to real users.
          </p>
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
              href={LINKS.messageblue}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 text-center"
            >
              messageblue.ai
            </a>
            <a
              href={LINKS.toldo}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-2.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 text-center"
            >
              toldo.ai
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
          <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
            <li>MessageBlue — iMessage API agent layer & integrations</li>
            <li>Blush — VIP matchmaking AI agents & CRM</li>
            <li>
              Toldo — AI assistant builder (
              <a href={LINKS.toldo} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">toldo.ai</a>
              )
            </li>
            <li>Lana — iMessage AI product</li>
          </ul>
        </div>
      )
    case 'notes':
      return (
        <div className="space-y-5">
          <p className="text-xs text-gray-500 font-mono">AI/ML | LLMs | LangChain | RAG | NLP | CV | Python | React | TS | Node | Firebase | Twilio | Langfuse | Cloudflare Workers</p>
          {SKILL_GROUPS.map((g) => (
            <div key={g.category}>
              <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">{g.category}</p>
              <p className="text-base font-semibold text-gray-900 mt-1 leading-relaxed">{g.skills.join('  ·  ')}</p>
            </div>
          ))}
        </div>
      )
    case 'resume':
      return (
        <div className="text-center space-y-4 py-4">
          <p className="text-4xl">📄</p>
          <p className="text-xl font-bold text-gray-900">Yugesh_Resume.pdf</p>
          <p className="text-gray-600">AI Products · Qualkode · MessageBlue · M.Tech AI</p>
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
