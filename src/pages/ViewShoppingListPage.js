import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useShoppingLists } from "../context/ShoppingListContext";
import Header from "../components/ViewPage/Header";
import ItemList from "../components/ViewPage/ItemList";
import MembersSection from "../components/ViewPage/MembersSection";
import LeaveListButton from "../components/ViewPage/LeaveListButton";
import ArchiveButton from "../components/ViewPage/ArchiveButton";
import BackButton from "../components/EditPage/BackButton";
import ConfirmModal from "../components/ConfirmModal/ConfirmModal";

function ViewShoppingListPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleBack = () => navigate("/");
  const { lists, updateList, archiveList, leaveList } = useShoppingLists();
  
  const shoppingList = lists.find((list) => list.id === Number(id));
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState(null);
  const [items, setItems] = useState(shoppingList ? shoppingList.items : []);

  if (!shoppingList) {
    return <p>Shopping list not found.</p>;
  }

  const handleResolveItem = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, resolved: true } : item
    );
    setItems(updatedItems);
    updateList(shoppingList.id, { items: updatedItems });
  };

  const handleUnresolveItem = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, resolved: false } : item
    );
    setItems(updatedItems);
    updateList(shoppingList.id, { items: updatedItems });
  };

  const handleArchive = () => {
    archiveList(shoppingList.id);
    navigate("/archive");
  };

  const handleLeave = () => {
    leaveList(shoppingList.id);
    navigate("/");
  };

  const handleConfirmAction = (type) => {
    setAction(type);
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (action === "archive") archiveList(shoppingList.id);
    else if (action === "leave") leaveList(shoppingList.id);
    setShowModal(false);
    navigate("/");
  };

  const handleCancel = () => {
    setShowModal(false);
    setAction(null);
  };

  return (
    <div>
      <BackButton onBack={handleBack} />
      <div className="PageContainer">
      <Header listName={shoppingList.title} ownerName={shoppingList.owner} />
      <MembersSection members={shoppingList.members} />
      <ItemList
        items={items}
        onResolveItem={handleResolveItem}
        onUnresolveItem={handleUnresolveItem}
      />
      <ArchiveButton onArchiveList={() => handleConfirmAction("archive")} />
      <LeaveListButton onLeaveList={() => handleConfirmAction("leave")} />

      {showModal && (
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

export default ViewShoppingListPage;
