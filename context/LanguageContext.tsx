'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Language } from '@/lib/translations'

type TranslationsType = typeof translations['en']

interface LanguageContextType {
  lang: Language
  t: TranslationsType
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('no')

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'no' : 'en'))
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
