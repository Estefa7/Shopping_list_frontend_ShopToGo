import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const { t } = useLanguage();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? `🌙 ${t("darkMode")}` : `☀️ ${t("lightMode")}`}
    </button>
  );
}

export default ThemeToggle;