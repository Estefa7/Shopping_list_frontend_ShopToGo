import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingLists } from "../context/ShoppingListContext";
import Header from "../components/ArchivePage/Header";
import SearchBar from "../components/ArchivePage/SearchBar";
import LeaveListButton from "../components/ArchivePage/LeaveListButton";
import DeleteListButton from "../components/ArchivePage/DeleteListButton";
import UnarchiveButton from "../components/ArchivePage/UnarchiveButton";
import BackButton from "../components/EditPage/BackButton";

function ArchivedListPage() {
  const { lists, unarchiveList, deleteList, leaveList } = useShoppingLists();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleBack = () => navigate("/");

  const archivedLists = lists
    .filter((l) => l.archived)
    .filter((l) => l.title.toLowerCase().includes(searchTerm.toLowerCase()));

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
            <UnarchiveButton onUnarchive={() => unarchiveList(list.id)} />
            {list.owner === "You" ? (
              <DeleteListButton onDelete={() => deleteList(list.id)} />
            ) : (
              <LeaveListButton onLeave={() => leaveList(list.id)} />
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default ArchivedListPage;
