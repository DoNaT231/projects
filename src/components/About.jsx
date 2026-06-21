import SectionTitle from "./SectionTitle"
import { useLanguage } from "../i18n/LanguageContext"

function About() {
  const { t } = useLanguage()

  const cards = [
    { title: t.about.studiesTitle, text: t.about.studiesText },
    { title: t.about.projectsTitle, text: t.about.projectsText },
    { title: t.about.careerTitle, text: t.about.careerText },
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        text={t.about.text}
      />

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-4 leading-7 text-slate-400">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
