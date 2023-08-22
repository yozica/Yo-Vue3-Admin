import { createI18n } from "vue-i18n";
import en from "./locales/en";
import zh_CN from "./locales/zh-CN";

const messages = {
  en: { ...en },
  "zh-CN": { ...zh_CN },
};

const getCurrentLanguage = () => {
  let UAlang = navigator.language;
  const lang = localStorage.getItem("lang");
  if (lang) {
    UAlang = lang;
  } else {
    localStorage.setItem("lang", UAlang);
  }
  return UAlang;
};

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getCurrentLanguage() || "zh-CN",
  messages,
});

export default i18n;
