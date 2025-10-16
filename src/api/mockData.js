export let mockLists = [
  {
    id: 1,
    title: "Bday gifts",
    owner: "You",
    archived: false,
    members: ["Anna", "Bell"],
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
    members: ["You", "Bell"],
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
    owner: "Family",
    archived: true,
    members: ["You", "Husband", "Son"],
    items: [
      { id: 1, name: "Veal", resolved: true },
      { id: 2, name: "Chicken", resolved: true },
      { id: 3, name: "Salmon", resolved: true },
      { id: 4, name: "Turkey", resolved: true },
      { id: 5, name: "Ground beef", resolved: true }
    ]
  }
];
