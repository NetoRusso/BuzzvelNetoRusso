import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import ptTranslation from "./locales/pt.json";

i18n
.use(initReactI18next)
.init({
  lng: 'pt', //define a linguagem inicial
  fallbacklng: 'pt', //define a linguagem alternativa
  resources: {
    en: {
      translation: enTranslation
    },
    pt: {
      translation: ptTranslation
    }
  },
  interpolation: {
    escapeValue: false // Evitar a necessidade de espaçar essa sequencia em tradução
  }
});

export default i18n;
