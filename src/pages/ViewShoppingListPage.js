import React, {useState} from "react";
import {shoppingList} from "../data/shoppingList.js";
import Header from "../components/ViewPage/Header.js";
import ItemList from "../components/ViewPage/ItemList.js";
import LeaveListButton from "../components/ViewPage/LeaveListButton.js";
import MembersSection from "../components/ViewPage/MembersSection.js";
import ArchiveButton from "../components/ViewPage/ArchiveButton.js";

function ViewShoppingListPage() {
    const [items, setItems] = useState(shoppingList.items);

    const handleResolve = (id) => {
        setItems((prev) =>
        prev.map((item) =>
        item.id === id ? { ...item, resolved: true }:item
    )
);
    };

    const handleUnresolve = (id) => {
        setItems((prev) =>
        prev.map((item) =>
        item.id === id ? {...item, resolved: false}:item
    )
);
    };

    return (
        <div>
        <Header listName={shoppingList.name} ownerName={shoppingList.owner} />
        <MembersSection members={shoppingList.members}/>
        <ItemList
        items={items}
        onResolveItem={handleResolve}
        onUnresolveItem={handleUnresolve}
        />
        <ArchiveButton onArchiveList={()=>alert("List archived")}/>
            <LeaveListButton onLeaveList={()=>alert("Left the list")}/>
                </div>
    );
}

export default ViewShoppingListPage;