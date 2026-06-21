import SectionTitle from "./SectionTitle"
import { useLanguage } from "../i18n/LanguageContext"

function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        text={t.experience.text}
      />

      <div className="space-y-5">
        {t.experience.items.map((item) => (
          <div
            key={item.role}
            className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <p className="text-sm text-emerald-300">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {item.role}
              </h3>
              <p className="mt-1 text-slate-400">{item.company}</p>
            </div>

            <p className="leading-7 text-slate-400">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
