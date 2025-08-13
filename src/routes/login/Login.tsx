// /src/routes/login/Login.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { supabase } from '@/lib/supabase'
import { Leaf } from 'lucide-react'
import Layout from '@/layout/Layout'

export default function Login() {
  const { t } = useTranslation('login')
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setError(t('errorFillFields'))
      return
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(t('errorLogin'))
    } else {
      setError('')
      navigate('/dashboard')
    }
  }

  return (
    <Layout>
      {/* Card del login */}
      <div className="w-full max-w-[420px] bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
            <Leaf className="w-6 h-6 text-green-500" />
            {t('title')}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-1 text-neutral-700 dark:text-neutral-300">
              {t('email')}
            </label>
            <input
              id="email"
              type="email"
              placeholder="adan@eden.com"
              className="w-full px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              inputMode="email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1 text-neutral-700 dark:text-neutral-300">
              {t('password')}
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••••"
              className="w-full px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white transition"
          >
            {t('login')}
          </button>

          <div className="text-center text-sm text-neutral-500 dark:text-neutral-400">— {t('or')} —</div>

          <button
            type="button"
            className="w-full py-2 border border-neutral-300 dark:border-neutral-600 hover:border-white rounded-lg transition"
            onClick={() => alert('Login con Google')}
          >
            {t('loginWithGoogle')}
          </button>

          <div className="text-sm text-right">
            <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">
              {t('forgotPassword')}
            </a>
          </div>
        </form>
      </div>
    </Layout>
  )
}
