import React, { useState } from "react";
import Header from "../components/MainPage/Header";
import SearchBar from "../components/MainPage/SearchBar";
import ShoppingListCard from "../components/MainPage/ShoppingListCard";
import CreateListButton from "../components/MainPage/CreateListButton";
import { useNavigate } from "react-router-dom";
import { useShoppingLists } from "../context/ShoppingListContext";
import ArchiveButton from "../components/MainPage/ArchiveButton";
import ArchivedListCard from "../components/MainPage/ArchivedListCard";
function ShoppingListPage() {
  const { lists, archiveList, deleteList, leaveList, createList } = useShoppingLists();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (term) => setSearchTerm(term.toLowerCase());

  const handleCreate = () => {
    const title = prompt("Enter new list title:");
    if (title) createList(title);
  };

  const handleOpenList = (list) => {
    if (list.owner === "You") navigate(`/edit/${list.id}`);
    else navigate(`/view/${list.id}`);
  };

  const handleOpenArchive = () => {
    navigate("/archive")
  };

  const filteredLists = lists
    .filter((list) => !list.archived)
    .filter((list) => list.title?.toLowerCase().includes(searchTerm));

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <CreateListButton onClick={handleCreate} />

      {filteredLists.map((list) => (
        <ShoppingListCard
          key={list.id}
          title={list.title}
          owner={list.owner}
          members={list.members}
          items={list.items}
          resolvedCount={list.items.filter((i) => i.resolved).length}
          isOwner={list.owner === "You"}
          onClick={() => handleOpenList(list)}
          onArchive={() => archiveList(list.id)}
          onDelete={() => deleteList(list.id)}
          onLeave={() => leaveList(list.id)}
        />
      ))}
      <ArchivedListCard onOpenArchive={handleOpenArchive} />
    </div>
  );
}

export default ShoppingListPage;
