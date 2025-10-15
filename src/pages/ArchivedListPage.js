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

function ArchivedListPage() {
  const { lists, unarchiveList, deleteList, leaveList } = useShoppingLists();
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [action, setAction] = useState(null);
  const navigate = useNavigate();

  const handleBack = () => navigate("/");

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
      <BackButton onBack={handleBack} />
      <Header />
      <h2>Archived Shopping Lists</h2>
      <SearchBar onSearch={setSearchTerm} />
      {archivedLists.length === 0 ? (
        <p>No archived lists found.</p>
      ) : (
        archivedLists.map((list) => (
          <div key={list.id} className="ShoppingListCard">
            <h3>{list.title} | Owner: {list.owner}</h3>
            <p>Members: {list.members.join(", ")}</p>
            <UnarchiveButton onUnarchive={() => handleConfirmAction(list, "unarchive")} />
            {list.owner === "You" ? (
              <DeleteListButton onDelete={() => handleConfirmAction(list, "delete")} />
            ) : (
              <LeaveListButton onLeave={() => handleConfirmAction(list, "leave")} />
            )}
          </div>
        ))
      )}
      {showModal && (
        <ConfirmModal
          message={`Are you sure you want to ${action} the list "${selectedList.title}"?`}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default ArchivedListPage;
