import SectionTitle from "./SectionTitle"
import { projects } from "../data/projects"

function ExternalLink({ href, children, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle
        eyebrow="Projektek"
        title="Saját weboldalak és digitális projektek."
        text="Valós, élesben futó vagy aktívan fejlesztett projektek — webalkalmazásoktól vállalkozói oldalakig, ahol a frontend, backend és üzleti logika együtt dolgozik."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => {
          const image = (
            <img
              src={project.image}
              alt={`${project.title} előnézet`}
              className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
            />
          )

          return (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.06]"
            >
              <div className="h-48 overflow-hidden border-b border-white/10 bg-slate-900">
                {project.link ? (
                  <ExternalLink
                    href={project.link}
                    className="block h-full cursor-pointer"
                  >
                    {image}
                  </ExternalLink>
                ) : (
                  image
                )}
              </div>

              <div className="p-6">
                <p className="mb-3 text-sm text-emerald-300">{project.category}</p>
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold">
                  {project.link && (
                    <ExternalLink
                      href={project.link}
                      className="text-emerald-300 transition hover:text-emerald-200"
                    >
                      Weboldal megtekintése →
                    </ExternalLink>
                  )}

                  {project.inDevelopment && !project.link && (
                    <span className="text-slate-500">Fejlesztés alatt</span>
                  )}

                  {project.github && (
                    <ExternalLink
                      href={project.github}
                      className="text-slate-400 transition hover:text-emerald-300"
                    >
                      GitHub →
                    </ExternalLink>
                  )}

                  {project.githubPrivate && (
                    <span className="text-slate-500">GitHub · Privát repó</span>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
