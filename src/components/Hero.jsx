function Hero() {
    return (
      <section className="mx-auto flex min-h-[78vh] max-w-6xl items-center px-5 py-20">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              Óbudai Egyetem · Gazdaságinformatika · Szakmai gyakorlat
            </p>
  
            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
              Komoróczy Donát
              <span className="block bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                webfejlesztő portfolio
              </span>
            </h1>
  
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Gazdaságinformatika hallgató vagyok az Óbudai Egyetemen — egy félév van
              hátra a 7 féléves képzésből. Tapasztalt vagyok webes felületek
              létrehozásában és működtetésében, és szakmai gyakorlatot keresek:
              bármilyen fejlesztési irány érdekel, szívesen kipróbálnám magam egy
              szoftverfejlesztő csapatban.
            </p>
  
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Projektjeim megtekintése
              </a>
  
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/60 hover:text-emerald-300"
              >
                Kapcsolatfelvétel
              </a>
            </div>
          </div>
  
          <div className="relative">
  <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 to-sky-400/20 blur-2xl" />

  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-emerald-950/30">
    <img
      src="/hero-image.jpg"
      alt="Komoróczy Donát portfolio bemutatkozó kép"
      className="h-[420px] w-full rounded-[1.5rem] object-cover object-top"
    />
      <div className="absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

    <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/65 p-4 backdrop-blur-xl">
      <p className="text-sm text-emerald-300">Saját & ügyfélprojektek</p>
      <p className="mt-1 text-base font-medium text-white">
        Webalkalmazások, vállalkozói oldalak és side projektek
      </p>
    </div>
  </div>
</div>
          </div>
      </section>
    )
  }
  
  export default Hero