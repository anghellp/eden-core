import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/tailwind.css'
import App from '@/App'

// 🧠 Importar i18n para que se inicialice
import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
