// src/hooks/useDarkMode.ts
import { useEffect, useState } from 'react'

export default function useDarkMode(): [boolean, (val: boolean) => void] {
  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const [enabled, setEnabled] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') return true
    if (savedTheme === 'light') return false
    return getSystemTheme()
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (enabled) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [enabled])

  return [enabled, setEnabled]
}
