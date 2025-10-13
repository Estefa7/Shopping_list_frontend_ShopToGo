export const initialLists = [
    {
        id: 1,
        title: "Bday gifts",
        owner: "You",
        archived: false,
        members: ["Anna", "Bell"],
        items: [
            {id:1, name: "Book", resolved: false}, 
            {id:2, name: "Perfume", resolved: false},
            {id:3, name: "Card", resolved: false},
            {id:4, name: "Chocolate", resolved: true},
            {id:5, name: "Flowers", resolved: false}
        ],
    },
    {
        id: 2,
        title: "Party snacks",
        owner: "Anna",
        archived: false,
        members: ["You", "Bell"],
        items: [
            { id: 1, name: "Chips", resolved: true},
            {id:2, name: "Sprite", resolved: false},
            {id:3, name: "Beer ", resolved: false},
            {id:4, name: "Nachos", resolved: true},
            {id:5, name: "Pizza", resolved: false},
            {id:6, name: "Salsa", resolved: true},
            {id:7, name: "Baby carrots", resolved: false},
            {id:8, name: "Hummus", resolved: false},
        ],
     },
     {
        id: 3,
        title: "Pet animals this year",
        owner: "Some weirdo",
        archived: true,
        members: ["You", "Will", "Smith"],
        items: [
            { id: 1, name: "Cat", resolved: true},
            {id:2, name: "Dog", resolved: true},
            {id:3, name: "Lizard ", resolved: true},
        ],
     },
];