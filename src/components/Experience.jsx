import SectionTitle from "./SectionTitle"

const experiences = [
  {
    role: "Gazdaságinformatika BSc",
    company: "Óbudai Egyetem",
    period: "2023 szeptember –",
    text: "Gazdaságinformatika alapképzés, 7 félév. 2023 szeptemberében kezdtem, jelenleg egy félév van hátra. A tananyag mellett önállóan és projektalapon fejlesztek webes alkalmazásokat.",
  },
  {
    role: "Önálló webfejlesztés",
    company: "Magánszemélyek & vállalkozások",
    period: "Saját projektek",
    text: "Weboldalak és webalkalmazások készítése ügyfeleknek — többek között sportegyesületi rendszer (pályafoglalás, admin), vállalkozói portfólió-oldal és egyéb digitális felületek. Emellett saját side projektek (edzésnapló, játékfejlesztés).",
  },
  {
    role: "Ápoló",
    company: "Egészségügyi szektor",
    period: "Szakmai gyakorlat",
    text: "Ápolói szakmai gyakorlat — felelősségteljes munkavégzés, csapatmunka és nyomás alatti döntéshozatal. A fejlesztői munkában is hasznosítom a precizitást és a rendszeres, megbízható munkastílust.",
  },
  {
    role: "Vizimentő",
    company: "Strand / vízimentő szolgálat",
    period: "Munkatapasztalat & gyakorlat",
    text: "Vizimentőként dolgoztam és szakmai gyakorlatot is teljesítettem. Gyors reagálás, kommunikáció és felelősségvállalás — olyan soft skillek, amelyek csapatmunkában és ügyfélprojektekben is számítanak.",
  },
]

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle
        eyebrow="Tapasztalat"
        title="Tanulmányok, projektek és háttér."
        text="Formális fejlesztői munkatapasztalatom még nincs — a webes munkát saját és ügyfélprojekteken, valamint az egyetemi képzésen keresztül szerzem. Az egészségügyi háttér csapatmunkára és felelősségvállalásra épít."
      />

      <div className="space-y-5">
        {experiences.map((item) => (
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
