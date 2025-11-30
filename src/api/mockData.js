export let mockLists = [
  {
    id: 1,
    title: "Bday gifts",
    owner: "You",
    archived: false,
    members: ["You", "Anna", "Bell"],
    items: [
      { id: 1, name: "Book", resolved: false },
      { id: 2, name: "Perfume", resolved: false },
      { id: 3, name: "Card", resolved: false },
      { id: 4, name: "Chocolate", resolved: true },
      { id: 5, name: "Flowers", resolved: false }
    ]
  },
  {
    id: 2,
    title: "Party snacks",
    owner: "Anna",
    archived: false,
    members: ["You",  "Anna", "Bell"],
    items: [
      { id: 1, name: "Chips", resolved: true },
      { id: 2, name: "Sprite", resolved: false },
      { id: 3, name: "Beer", resolved: false },
      { id: 4, name: "Nachos", resolved: true }
    ]
  },
  {
    id: 3,
    title: "Meat for next week",
    owner: "You",
    archived: true,
    members: ["You", "Husband", "Son"],
    items: [
      { id: 1, name: "Veal", resolved: true },
      { id: 2, name: "Chicken", resolved: true },
      { id: 3, name: "Salmon", resolved: true },
      { id: 4, name: "Turkey", resolved: true },
      { id: 5, name: "Ground beef", resolved: true }
    ]
  },
  {
    id: 4,
    title: "Silvester",
    owner: "Friend 5",
    archived: false,
    members: ["You", "Friend 5", "Friend 1", "Friend 2", "Friend 3", "Friend 4"],
    items: [
      { id: 1, name: "Fireworks", resolved: true },
      { id: 2, name: "Salad 1", resolved: false },
      { id: 3, name: "Salad 1", resolved: false },
      { id: 4, name: "Oranges", resolved: false },
      { id: 5, name: "Chips", resolved: false }
    ]
  }
];
