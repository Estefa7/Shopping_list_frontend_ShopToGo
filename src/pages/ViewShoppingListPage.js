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
import Loader from '../components/Common/Loader';
import ErrorBanner from '../components/Common/ErrorBanner';
import PieChart from "../components/Common/PieChart";
import ThemeToggle from "../components/Common/ThemeToggle";

function ViewShoppingListPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleBack = () => navigate("/");
  const { lists, listsPending, listsError, updateList, archiveList, leaveList } = useShoppingLists();
  
  const shoppingList = lists.find((list) => list.id === Number(id));
  const [items, setItems] = useState(shoppingList ? shoppingList.items : []);
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState(null);

 
  if (listsPending) return <Loader />;
  if (listsError) return <ErrorBanner message={listsError} />;
  if (!shoppingList) return <ErrorBanner message="Shopping list not found." />;


 
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

  const resolvedItems = items.filter((item) => item.resolved).length;
  const totalItems = items.length;


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
        <ThemeToggle />
      </div>
      <Header listName={shoppingList.title} ownerName={shoppingList.owner} />
      <div className="PageContainer EditPageLayout">
      <div className="EditMain">
      <MembersSection members={shoppingList.members} />
      <ItemList
        items={items}
        onResolveItem={handleResolveItem}
        onUnresolveItem={handleUnresolveItem}
      />
      </div>
      <div className="EditSidebar">
        <h3>Progress</h3>
          <PieChart resolved={resolvedItems} total={totalItems} />
          <p style={{ marginTop: 12 }}>
            {resolvedItems} / {totalItems} items completed
          </p>
        </div>
      </div>

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
  );
}

export default ViewShoppingListPage;
