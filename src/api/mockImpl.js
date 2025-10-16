import { mockLists } from "./mockData";

const wait = () => {
  const randomMs = Math.floor(Math.random() * 1000) + 100;
  return new Promise((res) => setTimeout(res, randomMs));
};

const findIndex = (id) =>
  mockLists.findIndex((l) => String(l.id) === String(id));

const clone = (v) => JSON.parse(JSON.stringify(v));

export async function fetchLists() {
  await wait(250);
  return clone(mockLists);
}

export async function createList(payload) {
  await wait(200);
  const nextId = Date.now();
  const newList = { id: nextId, ...payload };
  mockLists.push(newList);
  return clone(newList);
}

export async function updateList(id, updatedData) {
  await wait(200);
  const idx = findIndex(id);
  if (idx === -1) throw new Error("List not found");
  mockLists[idx] = { ...mockLists[idx], ...updatedData };
  return clone(mockLists[idx]);
}

export async function deleteList(id) {
  await wait(200);
  const idx = findIndex(id);
  if (idx === -1) throw new Error("List not found");
  mockLists.splice(idx, 1);
  return { success: true };
}

export async function archiveList(id) {
  return updateList(id, { archived: true });
}

export async function unarchiveList(id) {
  return updateList(id, { archived: false });
}

export async function leaveList(id, memberName = "You") {
  await wait(200);
  const idx = findIndex(id);
  if (idx === -1) throw new Error("List not found");
  mockLists[idx].members = mockLists[idx].members.filter((m) => m !== memberName);
  return clone(mockLists[idx]);
}

export async function addItem(id, itemPayload) {
  await wait(180);
  const idx = findIndex(id);
  if (idx === -1) throw new Error("List not found");
  const newItem = { id: Date.now(), ...itemPayload };
  mockLists[idx].items.push(newItem);
  return clone(newItem);
}

export async function updateItem(listId, itemId, data) {
  await wait(150);
  const idx = findIndex(listId);
  if (idx === -1) throw new Error("List not found");
  const items = mockLists[idx].items;
  const itemIdx = items.findIndex((it) => String(it.id) === String(itemId));
  if (itemIdx === -1) throw new Error("Item not found");
  items[itemIdx] = { ...items[itemIdx], ...data };
  return clone(items[itemIdx]);
}

export async function deleteItem(listId, itemId) {
  await wait(150);
  const idx = findIndex(listId);
  if (idx === -1) throw new Error("List not found");
  const items = mockLists[idx].items;
  const itemIdx = items.findIndex((it) => String(it.id) === String(itemId));
  if (itemIdx === -1) throw new Error("Item not found");
  items.splice(itemIdx, 1);
  return { success: true };
}
