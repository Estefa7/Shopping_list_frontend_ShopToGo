import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingLists } from "../context/ShoppingListContext";
import Header from "../components/ArchivePage/Header";
import SearchBar from "../components/ArchivePage/SearchBar";
import LeaveListButton from "../components/ArchivePage/LeaveListButton";
import DeleteListButton from "../components/ArchivePage/DeleteListButton";
import UnarchiveButton from "../components/ArchivePage/UnarchiveButton";
import BackButton from "../components/EditPage/BackButton";
import ConfirmModal from "../components/ConfirmModal/ConfirmModal";
import Loader from "../components/Common/Loader";
import ErrorBanner from "../components/Common/ErrorBanner";
import ThemeToggle from "../components/Common/ThemeToggle";
import LanguageSwitcher from "../components/Common/LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

function ArchivedListPage() {
  const { t } = useLanguage();
  const { lists, listsPending, listsError, unarchiveList, deleteList, leaveList } = useShoppingLists();
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [action, setAction] = useState(null);
  const navigate = useNavigate();

  const handleBack = () => navigate("/");

  if (listsPending) return <Loader />;
  if (listsError) return <ErrorBanner message={listsError} />;

  const archivedLists = lists
    .filter((l) => l.archived)
    .filter((l) => l.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleConfirmAction = (list, type) => {
    setSelectedList(list);
    setAction(type);
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (action === "delete") deleteList(selectedList.id);
    else if (action === "leave") leaveList(selectedList.id);
    else if (action === "unarchive") unarchiveList(selectedList.id);
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
    setSelectedList(null);
    setAction(null);
  };

  return (
    <div>
    <div 
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}
    >
      <BackButton onBack={handleBack} />
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>


      <Header />
      <div className="PageWrapper">
      <h2>{t("archivedShoppingLists")}</h2>
      <SearchBar onSearch={setSearchTerm} />
      {archivedLists.length === 0 ? (
        <ErrorBanner message={t("noArchivedListsFound")}  />
      ) : (
        <div className="ShoppingListGrid">
        {archivedLists.map((list) => (
          <div key={list.id} className="ShoppingListCard">
            <h3>{list.title} | {t("owner")}: {list.owner}</h3>
            <p>{t("members")}: {list.members.join(", ")}</p>
            <UnarchiveButton onUnarchive={() => handleConfirmAction(list, "unarchive")} />
            {list.owner === t("you") ? (
              <DeleteListButton onDelete={() => handleConfirmAction(list, "delete")} />
            ) : (
              <LeaveListButton onLeave={() => handleConfirmAction(list, "leave")} />
            )}
          </div>
      ))}
        </div>
      )}
      {showModal && (
        <ConfirmModal
          message={t("confirmActionMessage", {
              action: t(action),
              title: selectedList.title,
            })}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
        />
      )}
    </div>
    </div>
  );
}

export default ArchivedListPage;
