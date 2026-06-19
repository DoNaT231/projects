import SectionTitle from "./SectionTitle"
import { projects } from "../data/projects"

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle
        eyebrow="Projektek"
        title="Saját weboldalak és digitális projektek."
        text="Valós, élesben futó vagy aktívan fejlesztett projektek — webalkalmazásoktól vállalkozói oldalakig, ahol a frontend, backend és üzleti logika együtt dolgozik."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.06]"
          >
            <div className="h-48 overflow-hidden border-b border-white/10 bg-slate-900">
              <img
                src={project.image}
                alt={`${project.title} előnézet`}
                className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
              />
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

              <a
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-6 inline-flex text-sm font-semibold text-emerald-300 transition group-hover:text-emerald-200"
              >
                Részletek megtekintése →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects