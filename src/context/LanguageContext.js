import { createContext, useState, useContext } from "react";
import en from "../translations/en";
import cz from "../translations/cz";

const translations = { en, cz };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  const t = (key, vars = {}) => {
  let text = translations[lang][key] || key;

  Object.entries(vars).forEach(([name, value]) => {
    text = text.replace(new RegExp(`{{${name}}}`, "g"), value);
  });

  return text;
};

  const changeLanguage = (lng) => {
    setLang(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);