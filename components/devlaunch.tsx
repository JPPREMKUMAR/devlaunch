'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Layers3,
  Menu,
  X,
} from 'lucide-react'

const projects = [
  { name: 'CareerPath AI', type: 'AI / CAREER', description: 'A thoughtful career companion that turns your goals into a clear, actionable roadmap.', tags: ['Next.js', 'TypeScript', 'AI'], accent: 'blue', number: '01' },
  { name: 'EcoTrack', type: 'SUSTAINABILITY', description: 'Making everyday impact visible with simple tools for tracking a greener lifestyle.', tags: ['React', 'Charts', 'Supabase'], accent: 'green', number: '02' },
  { name: 'StudySprint', type: 'PRODUCTIVITY', description: 'A focused study timer designed around momentum, consistency, and small wins.', tags: ['React', 'Tailwind', 'PWA'], accent: 'violet', number: '03' },
  { name: 'SpendWise', type: 'FINTECH', description: 'A calmer way to understand your spending and make confident financial decisions.', tags: ['Next.js', 'TypeScript', 'Prisma'], accent: 'amber', number: '04' },
  { name: 'TaskFlow', type: 'WORKFLOW', description: 'Flexible project planning that keeps teams aligned without getting in the way.', tags: ['React', 'DnD Kit', 'Postgres'], accent: 'rose', number: '05' },
]

const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'GitHub']
const journey = [
  ['01', 'PLAN', 'Start with the problem, define the smallest useful solution, and make the next step obvious.'],
  ['02', 'BUILD', 'Turn ideas into clean, reusable components that are easy to understand and improve.'],
  ['03', 'TEST', 'Check the details, listen to real feedback, and make the experience feel effortless.'],
  ['04', 'SHIP', 'Use version control and thoughtful deployment to move from local idea to live product.'],
]

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-400">{children}</p>
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500">{project.type}</p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">{project.name}</h3>
        </div>
        <span className="font-mono text-xs text-slate-600">{project.number}</span>
      </div>
      <p className="mt-8 max-w-sm text-sm leading-6 text-slate-400">{project.description}</p>
      <div className="mt-7 flex flex-wrap gap-2">
        {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
      <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white">
        View project <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
    </article>
  )
}

export function DevLaunch() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100 selection:bg-blue-500/30">
      <header className="site-header">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="grid size-9 place-items-center rounded-xl bg-blue-500/15 text-blue-400 ring-1 ring-blue-400/20"><Code2 className="size-5" aria-hidden="true" /></span>
            <span className="font-semibold tracking-tight text-white">Dev<span className="text-blue-400">Launch</span></span>
          </a>
          <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-5 border-b border-white/10 bg-[#07111f] px-6 py-5 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="text-sm text-slate-400 transition-colors hover:text-white">{item}</a>)}
          </div>
          <a href="#contact" className="header-cta hidden sm:inline-flex">Let&apos;s connect <ArrowUpRight className="size-4" aria-hidden="true" /></a>
          <button className="rounded-lg p-2 text-slate-300 md:hidden" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </nav>
      </header>

      <section id="home" className="hero-section relative mx-auto max-w-6xl px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-36">
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 font-mono text-[11px] text-blue-300"><span className="size-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa]" /> Available for new opportunities</div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.8rem]">Building useful software,<br /><span className="text-gradient">one project at a time.</span></h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">I&apos;m a developer who cares about the details — from the first line of code to the final interaction. I build digital products that are clear, considered, and genuinely useful.</p>
          <div className="mt-10 flex flex-wrap items-center gap-4"><a href="#projects" className="primary-button">View projects <ChevronRight className="size-4" aria-hidden="true" /></a><a href="#contact" className="secondary-button">Contact me</a></div>
        </div>
        <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-6 text-xs text-slate-500"><span className="font-mono text-slate-600">CURRENTLY EXPLORING</span><span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-violet-400" />Product design</span><span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-blue-400" />Creative coding</span><span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-400" />Open source</span></div>
      </section>

      <section id="about" className="section-shell border-t border-white/5">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start"><div><SectionEyebrow>01 / About me</SectionEyebrow><h2 className="section-title">Curious by nature.<br /><span className="text-slate-500">Intentional by craft.</span></h2></div><div className="max-w-xl"><p className="text-xl leading-8 text-slate-200">I enjoy working at the intersection of thoughtful design and solid engineering.</p><p className="mt-6 leading-7 text-slate-400">When I&apos;m not building interfaces, I&apos;m usually learning something new, simplifying something complicated, or thinking about how technology can make everyday work a little better.</p><div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-6 sm:grid-cols-3"><div><p className="font-mono text-2xl text-white">05+</p><p className="mt-2 text-xs text-slate-500">Projects shipped</p></div><div><p className="font-mono text-2xl text-white">07</p><p className="mt-2 text-xs text-slate-500">Core technologies</p></div><div><p className="font-mono text-2xl text-white">∞</p><p className="mt-2 text-xs text-slate-500">Things left to learn</p></div></div></div></div>
      </section>

      <section id="projects" className="section-shell"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><SectionEyebrow>02 / Selected work</SectionEyebrow><h2 className="section-title">Things I&apos;ve been<br /><span className="text-slate-500">working on.</span></h2></div><p className="max-w-xs text-sm leading-6 text-slate-500">A collection of experiments, ideas, and products built with care.</p></div><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div></section>

      <section id="skills" className="section-shell border-t border-white/5"><div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]"><div><SectionEyebrow>03 / Toolkit</SectionEyebrow><h2 className="section-title">Tools for turning<br /><span className="text-slate-500">ideas into reality.</span></h2></div><div><div className="flex flex-wrap gap-3">{skills.map((skill) => <div key={skill} className="skill-pill"><Check className="size-4 text-blue-400" aria-hidden="true" />{skill}</div>)}</div><div className="mt-14 flex items-center gap-5 border-t border-white/10 pt-6 text-sm text-slate-500"><Layers3 className="size-5 text-violet-400" aria-hidden="true" /><span>Always learning, always iterating.</span></div></div></div></section>

      <section id="journey" className="section-shell"><div className="mb-14"><SectionEyebrow>04 / How I work</SectionEyebrow><h2 className="section-title">From first thought<br /><span className="text-slate-500">to final launch.</span></h2></div><div className="grid border-l border-white/10 md:grid-cols-4 md:border-l-0">{journey.map(([number, title, text]) => <div key={number} className="journey-item"><span className="font-mono text-xs text-blue-400">{number}</span><h3 className="mt-8 text-sm font-semibold tracking-[0.16em] text-white">{title}</h3><p className="mt-4 text-sm leading-6 text-slate-500">{text}</p></div>)}</div></section>

      <section id="contact" className="contact-section mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32"><div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-[#0b1b32] to-violet-500/10 px-6 py-14 text-center sm:px-12"><div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" /><SectionEyebrow>05 / Say hello</SectionEyebrow><h2 className="relative text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Have an idea worth building?</h2><p className="relative mx-auto mt-5 max-w-lg leading-7 text-slate-400">I&apos;m always open to interesting conversations, collaborations, and new challenges.</p><div className="relative mt-9 flex flex-wrap justify-center gap-4"><a className="primary-button" href="mailto:hello@example.com">Get in touch <ArrowUpRight className="size-4" aria-hidden="true" /></a><a className="secondary-button" href="https://github.com" target="_blank" rel="noreferrer"><Code2 className="size-4" aria-hidden="true" /> GitHub <ExternalLink className="size-3" aria-hidden="true" /></a></div></div></section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 px-6 py-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© 2025 DevLaunch. Built with curiosity.</p><div className="flex gap-5"><a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-slate-300">GitHub</a><a href="#home" className="transition-colors hover:text-slate-300">Back to top ↑</a></div></footer>
    </main>
  )
}
