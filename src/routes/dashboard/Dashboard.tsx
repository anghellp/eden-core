// /src/routes/dashboard/Dashboard.tsx
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { supabase } from '@/lib/supabase'
import Layout from '@/layout/Layout'
import EvaSkema from '@/components/EvaSkema'

function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const { t } = useTranslation('dashboard')
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        navigate('/login')
      } else {
        setUser(user)
      }
    })
  }, [navigate])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <Layout>
      <div className="p-10 max-w-3xl mx-auto relative">
        <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>

        {user ? (
          <>
            <p className="mb-2">
              {t('loggedInAs')} <strong>{user.email}</strong>
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              {t('logout')}
            </button>
          </>
        ) : (
          <p>{t('loading')}</p>
        )}
      </div>

      {/* ✅ Solo una Eva viva en el lugar correcto */}
      <div className="fixed bottom-4 right-4 z-50">
        <EvaSkema />
      </div>
    </Layout>
  )
}

export default Dashboard
