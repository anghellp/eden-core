// src/components/layout/LanguageThemePanel.tsx
import { useTranslation } from 'react-i18next'
import ThemeToggleButton from '@/components/ui/ThemeToggleButton'

export default function LanguageThemePanel() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white dark:bg-neutral-900 px-3 py-2 rounded-full shadow-md border border-neutral-300 dark:border-neutral-700">
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="appearance-none bg-transparent text-black dark:text-white text-sm px-2 py-1 rounded-md outline-none"
      >
        <option value="es">🇲🇽 Español</option>
        <option value="en">🇺🇸 English</option>
      </select>

      <ThemeToggleButton />
    </div>
  )
}
