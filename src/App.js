import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingListPage from "./pages/ShoppingListPage";
import EditShoppingListPage from "./pages/EditShoppingListPage";
import ViewShoppingListPage from "./pages/ViewShoppingListPage";
import ArchivedListPage from "./pages/ArchivedListPage";
import { ShoppingListProvider } from "./context/ShoppingListContext";


function App() {
  return (
    <ShoppingListProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ShoppingListPage />} />
          <Route path="/edit/:id" element={<EditShoppingListPage />} />
          <Route path="/view/:id" element={<ViewShoppingListPage />} />
          <Route path="/archived" element={<ArchivedListPage />} />
        </Routes>
      </Router>
    </ShoppingListProvider>
  );
}


export default App;