import { LINKS, MARQUEE_PHRASES, PROFILE, STUDIO_STACK_TAGS } from '../data/content'

export function DesktopWidgets() {
  return (
    <div className="absolute inset-0 pt-12 pb-28 px-4 md:px-10 pointer-events-none">
      <div className="overflow-hidden mb-6 opacity-60">
        <div className="flex gap-8 animate-marquee whitespace-nowrap text-sm md:text-base font-medium text-white/80">
          {[...MARQUEE_PHRASES, ...MARQUEE_PHRASES].map((p, i) => (
            <span key={i}>{p}</span>
          ))}
        </div>
      </div>

      <div className="max-w-4xl pointer-events-none">
        <p className="text-sm md:text-base font-semibold text-white/70 uppercase tracking-[0.2em] mb-2">
          {PROFILE.tagline}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.02] tracking-tight">
          {PROFILE.headline}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
          {PROFILE.bio}
        </p>
        <p className="mt-4 text-base text-white/50 max-w-xl">
          Open an app from the dock — or visit{' '}
          <a
            href={LINKS.kadalWork}
            target="_blank"
            rel="noreferrer"
            className="text-white/80 underline pointer-events-auto hover:text-white"
          >
            work.kadal.cc
          </a>{' '}
          for team case studies ↓
        </p>
      </div>

      <div className="absolute top-24 right-4 md:right-10 flex flex-col gap-4 w-[min(100%,300px)] pointer-events-none">
        <div className="rounded-2xl bg-white/12 backdrop-blur-xl border border-white/20 p-4 shadow-xl">
          <p className="text-[10px] uppercase tracking-wider text-white/50 mb-2">User profile</p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-lg font-bold">
              {PROFILE.initials}
            </div>
            <div>
              <p className="text-lg font-bold">{PROFILE.shortName}</p>
              <p className="text-sm text-white/60">{PROFILE.role}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white/12 backdrop-blur-xl border border-white/20 p-4 shadow-xl space-y-3 text-sm">
          <div>
            <p className="text-[10px] uppercase text-white/45">Current</p>
            <p className="font-semibold text-white/90">{PROFILE.currentRole}</p>
            <p className="text-xs text-white/55 mt-1">{PROFILE.currentProducts}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-white/45">Education</p>
            <p className="font-semibold text-white/90">{PROFILE.education}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-white/45">Location</p>
            <p className="font-semibold text-white/90">{PROFILE.location}</p>
          </div>
          {PROFILE.openToWork && (
            <p className="text-xs font-bold text-green-400">● Open to work</p>
          )}
        </div>

        <div className="rounded-2xl bg-white/12 backdrop-blur-xl border border-white/20 p-4 shadow-xl pointer-events-auto">
          <p className="text-[10px] uppercase text-white/45 mb-1">Studio portfolio</p>
          <a
            href={LINKS.kadalWork}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-white hover:underline"
          >
            work.kadal.cc →
          </a>
          <p className="text-[10px] text-white/50 mt-2 font-mono leading-relaxed">
            {STUDIO_STACK_TAGS.join('  ·  ')}
          </p>
        </div>
      </div>
    </div>
  )
}
