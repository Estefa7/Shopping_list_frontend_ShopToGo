import React, { createContext, useContext, useState, useEffect  } from "react";
import * as api from "../api/api";
import { useLanguage } from "../context/LanguageContext";

const ShoppingListContext = createContext();

export const useShoppingLists = () => useContext(ShoppingListContext);

export const ShoppingListProvider = ({ children }) => {
  const { t } = useLanguage();
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // operationStatus: { [key]: { status: 'idle'|'pending'|'success'|'error', error?:string } }
  const [operationStatus, setOperationStatus] = useState({});

  const setOp = (key, status, err = null) => {
    setOperationStatus((prev) => ({ ...prev, [key]: { status, error: err } }));
  };

  const runApi = async (key, fn) => {
    try {
      setOp(key, "pending", null);
      const result = await fn();
      setOp(key, "success", null);
      return result;
    } catch (e) {
      const msg = e?.message || t("unknownError");
      setOp(key, "error", msg);
      setError(msg);
      throw e;
    }
  };

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    api.fetchLists()
      .then((data) => {
        if (!mounted) return;
        setLists(data);
        setError(null);
      })
      .catch((e) => {
        console.error(e);
        setError(e.message || t("failedToLoadLists"));
      })
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, [t]);

  const createList = async (title) => {
    const payload = { title, owner: t("you"), members: [t("you")], items: [], archived: false };
    const created = await runApi("createList", () => api.createList(payload));
    setLists((prev) => [...prev, created]);
    return created;
  };

  const value = {
    lists,
    loading,
    error,
    operationStatus,
    setError,
    createList,
    updateList: async (id, updatedData) => {
      const updated = await runApi(`list:${id}:update`, () =>
        api.updateList(id, updatedData)
      );
      setLists((prev) =>
        prev.map((l) => (String(l.id) === String(updated.id) ? updated : l))
      );
      return updated;
    },
    deleteList: async (id) => {
      await runApi(`list:${id}:delete`, () => api.deleteList(id));
      setLists((prev) => prev.filter((l) => String(l.id) !== String(id)));
    },
    addItem: async (listId, itemPayload) => {
      const newItem = await runApi(`list:${listId}:addItem`, () =>
        api.addItem(listId, itemPayload)
      );
      setLists((prev) =>
        prev.map((l) =>
          String(l.id) === String(listId)
            ? { ...l, items: [...l.items, newItem] }
            : l
        )
      );
      return newItem;
       },
    updateItem: async (listId, itemId, data) => {
      const updatedItem = await runApi(
        `list:${listId}:updateItem:${itemId}`,
        () => api.updateItem(listId, itemId, data)
      );
      setLists((prev) =>
        prev.map((l) =>
          String(l.id) === String(listId)
            ? {
                ...l,
                items: l.items.map((it) =>
                  String(it.id) === String(itemId) ? updatedItem : it
                ),
              }
            : l
        )
      );
      return updatedItem;
    },
    deleteItem: async (listId, itemId) => {
      await runApi(`list:${listId}:deleteItem:${itemId}`, () =>
        api.deleteItem(listId, itemId)
      );
      setLists((prev) =>
        prev.map((l) =>
          String(l.id) === String(listId)
            ? {
                ...l,
                items: l.items.filter((it) => String(it.id) !== String(itemId)),
              }
            : l
        )
      );
    },
    archiveList: async (id) => {
      const updated = await runApi(`list:${id}:archive`, () =>
        api.archiveList(id)
      );
      setLists((prev) =>
        prev.map((l) => (String(l.id) === String(updated.id) ? updated : l))
      );
    },

    unarchiveList: async (id) => {
      const updated = await runApi(`list:${id}:unarchive`, () =>
        api.unarchiveList(id)
      );
      setLists((prev) =>
        prev.map((l) => (String(l.id) === String(updated.id) ? updated : l))
      );
    },

    leaveList: async (id, member = t("you")) => {
      const updated = await runApi(`list:${id}:leave`, () =>
        api.leaveList(id, member)
      );
      setLists((prev) =>
        prev.map((l) => (String(l.id) === String(updated.id) ? updated : l))
      );
    },
  };



  return (
    <ShoppingListContext.Provider value={value}>
      {children}
    </ShoppingListContext.Provider>
  );
};


