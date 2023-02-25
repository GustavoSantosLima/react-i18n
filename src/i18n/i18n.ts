import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ptJSON from "./pt.json";
import enJSON from "./en.json";

export const resources = {
  pt: {
    translation: ptJSON
  },
  en: {
    translation: enJSON
  }
} as const;

i18next.use(initReactI18next).init({
  resources,
  lng: "pt",
  ns: ["translation"],
  defaultNS: "translation",
  interpolation: {
    escapeValue: false
  }
});

export default i18next;
