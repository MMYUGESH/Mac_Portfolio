import type { Project } from '../data/content'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/5 p-4 backdrop-blur-sm hover:bg-white/10 transition-colors">
      <h4 className="text-sm font-bold text-white">{project.title}</h4>
      {project.period && <p className="text-[10px] text-white/40 mt-0.5">{project.period}</p>}
      <p className="text-xs text-white/60 mt-2 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-2">
        {project.tech.map((t) => (
          <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[#e50914]/20 text-[#ff6b6b]">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
