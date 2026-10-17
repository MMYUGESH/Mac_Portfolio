import { EXPERIENCES } from '../data/content'

export function ExperienceView() {
  return (
    <div className="bg-[#0d1117] -m-4 p-5 min-h-full text-[15px] leading-relaxed">
      <p className="font-mono text-gray-500 text-sm mb-4">
        <span className="text-green-400">yugesh@portfolio</span>:~$ cat experience.log
      </p>
      {EXPERIENCES.map((e) => (
        <article key={e.id} className="mb-8 pb-6 border-b border-gray-700/80 last:border-0">
          <header className="mb-3">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span aria-hidden>{e.icon}</span>
              {e.company}
            </h3>
            <p className="text-base font-semibold text-cyan-400 mt-1">{e.role}</p>
            <p className="text-sm text-gray-400 mt-1 font-mono">
              <span className="text-amber-400/90">⏱</span> {e.period}
              {e.employmentType && <> · <span className="text-violet-300">{e.employmentType}</span></>}
              {e.location && <> · <span className="text-gray-300">{e.location}</span></>}
            </p>
          </header>

          {e.summary && (
            <p className="text-gray-300 text-[15px] mb-4 pl-1 border-l-2 border-cyan-500/40">
              {e.summary}
            </p>
          )}

          {e.sections?.map((sec) => (
            <section key={sec.title} className="mt-4 rounded-lg bg-white/[0.03] border border-gray-700/60 p-4">
              <h4 className="text-base font-bold text-amber-300 flex items-center gap-2">
                <span className="text-lg" aria-hidden>{sec.icon}</span>
                {sec.title}
              </h4>
              <ul className="mt-3 space-y-2.5">
                {sec.bullets.map((b) => (
                  <li key={b} className="text-gray-200 text-[15px] pl-1 flex gap-2">
                    <span className="text-green-500 font-mono shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {e.highlights.length > 0 && (
            <ul className="mt-4 space-y-2.5">
              {e.highlights.map((h) => (
                <li key={h} className="text-gray-200 text-[15px] flex gap-2">
                  <span className="text-green-500 font-mono shrink-0">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {e.skills && e.skills.length > 0 && (
            <p className="mt-4 text-sm font-mono text-blue-300/90 bg-blue-950/30 rounded-md px-3 py-2 inline-block">
              <span className="mr-1">🛠</span>
              <span className="text-gray-400">stack:</span> {e.skills.join(' · ')}
            </p>
          )}
        </article>
      ))}
    </div>
  )
}
