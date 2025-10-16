import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useShoppingLists } from "../context/ShoppingListContext";
import BackButton from "../components/EditPage/BackButton";
import Header from "../components/EditPage/Header";
import MembersSection from "../components/EditPage/MembersSection";
import ItemList from "../components/EditPage/ItemList";
import ArchiveButton from "../components/EditPage/ArchiveButton";
import DeleteListButton from "../components/EditPage/DeleteListButton";
import ConfirmModal from "../components/ConfirmModal/ConfirmModal";
import InputModal from "../components/InputModal/InputModal";

function EditShoppingListPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lists, updateList, archiveList, deleteList } = useShoppingLists();

  const shoppingList = lists.find((list) => list.id === Number(id));
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [action, setAction] = useState(null);
  const [title, setTitle] = useState(shoppingList ? shoppingList.title : "");
  const [members, setMembers] = useState(shoppingList ? shoppingList.members : []);
  const [items, setItems] = useState(shoppingList ? shoppingList.items : []);
  const [newItemName, setNewItemName] = useState("");

  const handleRename = (newTitle) => {
    setTitle(newTitle);
    updateList(shoppingList.id, { title: newTitle });
    setShowRenameModal(false);
  };

  if (!shoppingList) {
    return <p>Shopping list not found.</p>;
  }

  const handleAddMember = (name) => {
    if (name.trim() && !members.includes(name)) {
      const updated = [...members, name.trim()];
      setMembers(updated);
      updateList(shoppingList.id, { members: updated });
    }
  };

  const handleRemoveMember = (name) => {
    const updated = members.filter((m) => m !== name);
    setMembers(updated);
    updateList(shoppingList.id, { members: updated });
  };

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = { id: Date.now(), name: newItemName.trim(), resolved: false };
      const updated = [...items, newItem];
      setItems(updated);
      updateList(shoppingList.id, { items: updated });
      setNewItemName("");
    }
  };

  const handleResolve = (itemId) => {
    const updated = items.map((i) =>
      i.id === itemId ? { ...i, resolved: true } : i
    );
    setItems(updated);
    updateList(shoppingList.id, { items: updated });
  };

  const handleUnresolve = (itemId) => {
    const updated = items.map((i) =>
      i.id === itemId ? { ...i, resolved: false } : i
    );
    setItems(updated);
    updateList(shoppingList.id, { items: updated });
  };

  const handleArchive = () => {
    archiveList(shoppingList.id);
    navigate("/archive");
  };

  const handleDelete = (itemId) => {
    const updated = items.filter(item => item.id !== itemId);
    setItems(updated);
    updateList(shoppingList.id, { items: updated });
  };

  const handleConfirmAction = (type) => {
    setAction(type);
    setShowConfirmModal(true);
  };

  const handleConfirm = () => {
    if (action === "archive") archiveList(id);
    else if (action === "delete") deleteList(id);
    setShowConfirmModal(false);
    navigate("/");
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
    setAction(null);
  };

  const handleBack = () => navigate("/");

  return (
    <div>
      <BackButton onBack={handleBack} />
      <div className="PageContainer">
      <Header listName={title} onRenameClick={() => setShowRenameModal(true)} />
        {showRenameModal && (
        <InputModal
          title="Rename List"
          placeholder="Enter new name"
          initialValue={title}
          onConfirm={handleRename}
          onCancel={() => setShowRenameModal(false)}
        />
      )}
      <MembersSection
        members={members}
        onAddMember={handleAddMember}
        onRemoveMember={handleRemoveMember}
      />
      <ItemList
        items={items}
        onResolve={handleResolve}
        onUnresolve={handleUnresolve}
        onDelete={handleDelete}
        newItemName={newItemName}
        onAddItem={handleAddItem}
        setNewItemName={setNewItemName}
      />
      <ArchiveButton onArchiveList={() => handleConfirmAction("archive")} />
      <DeleteListButton onDeleteList={() => handleConfirmAction("delete")} />

      {showConfirmModal  && (
        <ConfirmModal
          message={`Are you sure you want to ${action} this list?`}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      </div>
    </div>
  );
}

export default EditShoppingListPage;
