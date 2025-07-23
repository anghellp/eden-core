import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      login: {
        title: "Welcome",
        email: "Email",
        password: "Password",
        submit: "Login",
        google: "Login with Google",
        invalidEmail: "Invalid email address",
        invalidPassword: "Password is required",
        error: "Unable to login"
      }
    }
  },
  es: {
    translation: {
      login: {
        title: "Bienvenido",
        email: "Correo",
        password: "Contrase\u00f1a",
        submit: "Ingresar",
        google: "Ingresar con Google",
        invalidEmail: "Correo inv\u00e1lido",
        invalidPassword: "La contrase\u00f1a es obligatoria",
        error: "Error al iniciar sesi\u00f3n"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
