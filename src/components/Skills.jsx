import SectionTitle from "./SectionTitle"

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML / CSS",
      "Tailwind CSS",
      "React Router",
      "Vite",
      "Reszponzív design",
      "Komponens architektúra",
    ],
  },
  {
    title: "Backend & adat",
    items: [
      "Node.js",
      "Express",
      "REST API",
      "PostgreSQL",
      "Prisma ORM",
      "Firebase Auth",
      "Cloud Firestore",
      "JWT",
      "Socket.IO",
      "Brevo",
    ],
  },
  {
    title: "Üzleti logika & UX",
    items: [
      "Local-first mentés",
      "Feature-alapú struktúra",
      "Repository–service réteg",
      "Szerepkör-alapú jogosultság",
      "SEO & Open Graph",
      "GDPR / cookie kezelés",
      "Landing page",
      "Tartalomstruktúra",
      "Scrum / csapatfolyamatok",
    ],
  },
  {
    title: "Eszközök & deploy",
    items: [
      "Git / GitHub",
      "Cursor",
      "Vite",
      "ESLint",
      "VPS",
      "Nginx",
      "PM2",
      "Formspree",
      "Leaflet",
      "Web Audio API",
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle
        eyebrow="Készségek"
        title="Technikai eszköztár."
        text="A stack, amit a saját és ügyfélprojektekben használok — React-alapú frontendtől Firebase és PostgreSQL backendig, realtime kommunikációtól local-first adatkezelésig."
      />

      <div className="grid gap-5 md:grid-cols-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-900 px-3 py-1.5 text-sm text-slate-300 ring-1 ring-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills