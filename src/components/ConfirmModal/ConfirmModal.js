import React from "react";
import "./ConfirmModal.css";
import { useLanguage } from "../../context/LanguageContext";

function ConfirmModal({ message, onConfirm, onCancel }) {
  const { t } = useLanguage();

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <p>{message}</p>
        <div className="modal-actions">
          <button className="confirm" onClick={onConfirm}>{t("yes")}</button>
          <button className="cancel" onClick={onCancel}>{t("no")}</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
