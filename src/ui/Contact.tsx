import { PROFILE } from '../data/content'

export function Contact() {
  return (
    <div className="space-y-3">
      <a
        href={`mailto:${PROFILE.email}`}
        className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-bold text-sm hover:bg-white/90"
      >
        ▶ Contact
      </a>
      <div className="flex flex-wrap gap-4 text-sm">
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
          LinkedIn
        </a>
        <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
          GitHub
        </a>
        <a href={PROFILE.resumePath} download className="text-[#e50914] hover:underline">
          Download resume
        </a>
      </div>
    </div>
  )
}
