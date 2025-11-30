import React, { useState } from "react";
import Header from "../components/MainPage/Header";
import SearchBar from "../components/MainPage/SearchBar";
import ShoppingListCard from "../components/MainPage/ShoppingListCard";
import CreateListButton from "../components/MainPage/CreateListButton";
import { useNavigate } from "react-router-dom";
import { useShoppingLists } from "../context/ShoppingListContext";
import ArchivedListCard from "../components/MainPage/ArchivedListCard";
import ConfirmModal from "../components/ConfirmModal/ConfirmModal";
import InputModal from "../components/InputModal/InputModal";
import Loader from "../components/Common/Loader";
import ErrorBanner from "../components/Common/ErrorBanner";

function ShoppingListPage() {
  const { lists, listsPending, listsError, archiveList, deleteList, leaveList, createList } = useShoppingLists();
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false); 
  const [newListName, setNewListName] = useState(""); 
  const [selectedList, setSelectedList] = useState(null);
  const [action, setAction] = useState(null);
  const navigate = useNavigate();

  if (listsPending) return <Loader />;
  if (listsError) return <ErrorBanner message={listsError} />;

  const handleSearch = (term) => setSearchTerm(term.toLowerCase());

  const handleCreateClick = () => {
    setShowCreateModal(true);
  };

  const handleCreateConfirm = (title) => {
    if (title.trim()) createList(title.trim());
    setShowCreateModal(false);
    setNewListName("");
  };

  const handleCreateCancel = () => {
    setShowCreateModal(false);
    setNewListName("");
  };

  const handleOpenList = (list) => {
    if (list.owner === "You") navigate(`/edit/${list.id}`);
    else navigate(`/view/${list.id}`);
  };

  const handleOpenArchive = () => {
    navigate("/archive")
  };

  const handleConfirmAction = (list, type) => {
    setSelectedList(list);
    setAction(type);
    setShowModal(true);
  };

  const handleConfirm = async () => {
  if (!selectedList || !action) return;

  try {
    if (action === "delete") {
      await deleteList(selectedList.id);
    } else if (action === "leave") {
      await leaveList(selectedList.id);
    } else if (action === "archive") {
      await archiveList(selectedList.id);
    }
  } finally {
    setShowModal(false);
    setSelectedList(null);
    setAction(null);
  }
};


  const handleCancel = () => {
    setShowModal(false);
    setSelectedList(null);
    setAction(null);
  };

  const filteredLists = lists
    .filter((list) => !list.archived)
    .filter((list) => list.title?.toLowerCase().includes(searchTerm));

  return (
    <div>
      <Header />
      <div className="PageWrapper">     
      <SearchBar onSearch={handleSearch} />
      <CreateListButton onClick={handleCreateClick} />
      <ArchivedListCard onOpenArchive={handleOpenArchive} />

      <div className="ShoppingListGrid">
      {filteredLists.map((list) => (
        <ShoppingListCard
          key={list.id}
          list={list}
          isOwner={list.owner === "You"}
          onClick={() => handleOpenList(list)}
          onArchive={() => handleConfirmAction(list, "archive")}
          onDelete={() => handleConfirmAction(list, "delete")}
          onLeave={() => handleConfirmAction(list, "leave")}
        />

      ))}
    </div>
    {showModal && (
        <ConfirmModal
          message={`Are you sure you want to ${action} the list "${selectedList.title}"?`}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      {showCreateModal && (
        <InputModal
          title="Create New List"
          placeholder="Enter list name"
          initialValue={newListName}
          onConfirm={handleCreateConfirm}
          onCancel={handleCreateCancel}
        />
      )}
    </div>
    </div>
  );
}

export default ShoppingListPage;
