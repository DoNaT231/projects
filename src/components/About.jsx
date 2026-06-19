import SectionTitle from "./SectionTitle"

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle
        eyebrow="Rólam"
        title="Gazdaságinformatika hallgató, gyakorlati webfejlesztési tapasztalattal."
        text="2023 szeptemberében kezdtem az Óbudai Egyetemen a gazdaságinformatika képzést. A tanulmányok mellett valós webes projekteket építek — embereknek és vállalkozásoknak is —, és ezen az oldalon mutatom be a munkáimat."
      />

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-xl font-semibold text-white">Tanulmányok</h3>
          <p className="mt-4 leading-7 text-slate-400">
            Óbudai Egyetem, gazdaságinformatika BSc — 2023 szeptemberi
            kezdéssel, összesen 7 félév. Jelenleg az utolsó félévem előtt
            állok, és szakmai gyakorlatot keresek a diploma előtt.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-xl font-semibold text-white">Webes projektek</h3>
          <p className="mt-4 leading-7 text-slate-400">
            Már készítettem weboldalakat magánszemélyeknek és vállalkozásoknak,
            emellett saját, „fun” projekteken is dolgozom. React-alapú
            frontendtől full-stack megoldásokig — a portfóliómban láthatóak az
            éles és fejlesztés alatt álló munkáim.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-xl font-semibold text-white">Karriercél</h3>
          <p className="mt-4 leading-7 text-slate-400">
            Szakmai gyakorlatot keresek fejlesztés irányában, és szívesen
            kipróbálnám magam egy szoftverfejlesztő csapatban — akár közvetítő
            vagy Scrum-folyamat résztvevő szerepkörben is. AI eszközként
            főleg a Cursort használom a mindennapi fejlesztéshez.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
