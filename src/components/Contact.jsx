import SectionTitle from "./SectionTitle"

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-sky-400/10 p-8 md:p-10">
        <SectionTitle
          eyebrow="Kapcsolat"
          title="Dolgozzunk együtt, vagy beszéljünk egy lehetőségről."
          text="Szakmai gyakorlatot keresek fejlesztés irányában — szívesen beszélnék bármilyen lehetőségről, ahol egy szoftverfejlesztő csapatban tanulhatok és hozzájárulhatok."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=donatkomoroczy@gmail.com&su=Kapcsolatfelv%C3%A9tel%20-%20Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 transition hover:border-emerald-400/50"
          >
            <p className="text-sm text-slate-400">Email</p>
            <p className="mt-2 font-medium text-white">
              donatkomoroczy@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/don%C3%A1t-komor%C3%B3czy-1611b0354/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 transition hover:border-emerald-400/50"
          >
            <p className="text-sm text-slate-400">LinkedIn</p>
            <p className="mt-2 font-medium text-white">Profil megnyitása</p>
          </a>

          <a
            href="https://github.com/DoNaT231"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 transition hover:border-emerald-400/50"
          >
            <p className="text-sm text-slate-400">GitHub</p>
            <p className="mt-2 font-medium text-white">Projektjeim</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact