// src/routes/ProtectedRoute.tsx
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from '@/lib/supabase'

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setIsAuthenticated(!!user)
    })
  }, [])

  if (isAuthenticated === null) return null

  return isAuthenticated ? children : <Navigate to="/login" replace />
}
