// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from '@/routes/login/Login'
import Usuarios from '@/routes/usuarios'
import Dashboard from '@/routes/dashboard/Dashboard'
import LanguageThemePanel from '@/components/layout/LanguageThemePanel'
import ProtectedRoute from '@/routes/ProtectedRoute'

function App() {
  return (
    <Router>
      {/* ⬇️ Panel de idioma/tema visible siempre */}
      <LanguageThemePanel />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/usuarios"
          element={
            <ProtectedRoute>
              <Usuarios />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
