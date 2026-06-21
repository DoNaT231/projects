import { createContext, useContext, useEffect, useState } from "react"
import { translations } from "./translations"

const LanguageContext = createContext(null)

const STORAGE_KEY = "portfolio-lang"

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === "en" ? "en" : "hu"
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
    document.title = translations[language].meta.title

    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute("content", translations[language].meta.description)
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage((current) => (current === "hu" ? "en" : "hu"))
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
