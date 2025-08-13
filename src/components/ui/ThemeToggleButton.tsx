// src/components/ui/ThemeToggleButton.tsx
import { Moon, Sun } from 'lucide-react'
import useDarkMode from '@/hooks/useDarkMode'

export default function ThemeToggleButton() {
  const [enabled, setEnabled] = useDarkMode()

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:scale-105 transition transform duration-200"
      aria-label="Toggle Theme"
      title={enabled ? 'Modo claro' : 'Modo oscuro'}
    >
      {enabled ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-blue-500" />
      )}
    </button>
  )
}
