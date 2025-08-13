// /src/layout/Layout.tsx
import { ReactNode } from 'react'
import LanguageThemePanel from '@/components/layout/LanguageThemePanel'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        min-h-[100svh]
        bg-white dark:bg-black text-black dark:text-white
        transition-colors duration-300
        pt-[env(safe-area-inset-top)]
        pr-[env(safe-area-inset-right)]
        pb-[env(safe-area-inset-bottom)]
        pl-[env(safe-area-inset-left)]
      "
    >
      {/* Panel fijo arriba a la derecha */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageThemePanel />
      </div>

      {/* Centro global para todas las páginas */}
      <main className="min-h-[calc(100svh-4rem)] flex items-center justify-center px-4 sm:px-6">
        {children}
      </main>
    </div>
  )
}
