import React, { createContext, useContext, useState } from "react";
import { initialLists } from "../data/initialLists";

const ShoppingListContext = createContext();

export const useShoppingLists = () => useContext(ShoppingListContext);

export const ShoppingListProvider = ({ children }) => {
  const [lists, setLists] = useState(initialLists);


  const createList = (title) => {
    const newList = {
      id: Date.now(),
      title,
      owner: "You",
      members: ["You"],
      items: [],
      archived: false,
    };
    setLists((prev) => [...prev, newList]);
  };

  const deleteList = (id) => {
    setLists((prev) => prev.filter((list) => list.id !== id));
  };

  const archiveList = (id) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === id ? { ...list, archived: true } : list
      )
    );
  };

  const unarchiveList = (id) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === id ? { ...list, archived: false } : list
      )
    );
  };

  const leaveList = (id) => {
    setLists((prev) => prev.filter((list) => list.id !== id));
  };

  const updateList = (id, updatedData) => {
    setLists((prev) =>
      prev.map((list) => (list.id === id ? { ...list, ...updatedData } : list))
    );
  };

  const value = {
    lists,
    setLists,
    createList,
    deleteList,
    archiveList,
    unarchiveList,
    leaveList,
    updateList,
  };

  return (
    <ShoppingListContext.Provider value={value}>
      {children}
    </ShoppingListContext.Provider>
  );
};
