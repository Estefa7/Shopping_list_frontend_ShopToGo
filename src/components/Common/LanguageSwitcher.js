import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useLanguage();

  return (
    <select
      value={lang}
      onChange={(e) => changeLanguage(e.target.value)}
      style={{ padding: "4px", borderRadius: "6px" }}
    >
      <option value="en">🇬🇧 EN</option>
      <option value="cz">🇨🇿 CZ</option>
    </select>
  );
}