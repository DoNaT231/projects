import { useLanguage } from "../i18n/LanguageContext"

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-slate-500 md:flex-row">
        <p>© 2026 Komoróczy Donát</p>
        <p>{t.footer.tagline}</p>
      </div>
    </footer>
  )
}

export default Footer
