import { useLanguage } from "../i18n/LanguageContext"

function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
      <button
        type="button"
        onClick={() => setLanguage("hu")}
        className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
          language === "hu"
            ? "bg-emerald-400 text-slate-950"
            : "text-slate-400 hover:text-white"
        }`}
        aria-label="Magyar nyelv"
        aria-pressed={language === "hu"}
      >
        HU
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
          language === "en"
            ? "bg-emerald-400 text-slate-950"
            : "text-slate-400 hover:text-white"
        }`}
        aria-label="English language"
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  )
}

function Header() {
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          Donát<span className="text-emerald-400">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch />

          <a
            href="#contact"
            className="hidden rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950 sm:inline-flex"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
