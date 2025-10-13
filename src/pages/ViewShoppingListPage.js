import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useShoppingLists } from "../context/ShoppingListContext";
import Header from "../components/ViewPage/Header";
import ItemList from "../components/ViewPage/ItemList";
import MembersSection from "../components/ViewPage/MembersSection";
import LeaveListButton from "../components/ViewPage/LeaveListButton";
import ArchiveButton from "../components/ViewPage/ArchiveButton";
import BackButton from "../components/EditPage/BackButton";

function ViewShoppingListPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleBack = () => navigate("/");
  const { lists, updateList, archiveList, leaveList } = useShoppingLists();
  
  const shoppingList = lists.find((list) => list.id === Number(id));

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

  return (
    <div>
      <BackButton onBack={handleBack} />
      <Header listTitle={shoppingList.title} ownerName={shoppingList.owner} />
      <MembersSection members={shoppingList.members} />
      <ItemList
        items={items}
        onResolveItem={handleResolveItem}
        onUnresolveItem={handleUnresolveItem}
      />
      <ArchiveButton onArchiveList={handleArchive} />
      <LeaveListButton onLeaveList={handleLeave} />
    </div>
  );
}

export default ViewShoppingListPage;
