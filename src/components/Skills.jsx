import SectionTitle from "./SectionTitle"
import { useLanguage } from "../i18n/LanguageContext"

function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        text={t.skills.text}
      />

      <div className="grid gap-5 md:grid-cols-4">
        {t.skills.groups.map((group) => (
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
