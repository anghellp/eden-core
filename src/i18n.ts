import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enLogin from './locales/en/login.json'
import enDashboard from './locales/en/dashboard.json'
import esLogin from './locales/es/login.json'
import esDashboard from './locales/es/dashboard.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        login: enLogin,
        dashboard: enDashboard,
      },
      es: {
        login: esLogin,
        dashboard: esDashboard,
      },
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
