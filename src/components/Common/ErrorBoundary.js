import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ErrorBoundary({ children }) {
  const { t } = useLanguage();
  const [error, setError] = useState(null);

  return (
    <React.ErrorBoundary
      fallbackRender={({ error }) => (
        <div style={{ padding: 24 }}>
          <h2>{t("somethingWentWrong")}</h2>
          <pre style={{ color: "#900" }}>{String(error)}</pre>
        </div>
      )}
      onError={(err) => setError(err)}
    >
      {children}
    </React.ErrorBoundary>
  );
}