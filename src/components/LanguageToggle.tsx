import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const storedLang = localStorage.getItem('lang')
    const browserLang = navigator.language.startsWith('es') ? 'es' : 'en'
    i18n.changeLanguage(storedLang || browserLang)
  }, [i18n])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <select
      onChange={handleChange}
      defaultValue={localStorage.getItem('lang') || i18n.language}
      className="absolute top-4 left-4 bg-neutral-800 text-white p-1 rounded"
    >
      <option value="es">🇲🇽 Español</option>
      <option value="en">🇺🇸 English</option>
    </select>
  )
}
