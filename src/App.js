import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import ListForm from "./components/ListForm";
const LOCAL_STORAGE_KEY = "items-list";
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageItems) {
      setItems(storageItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem(item) {
    // adds new item to beginning of items array
    setItems([...items, item]);
  }
  function togglePending(id) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            pending: !item.pending,
          };
        }
        return item;
      })
    );
  }
  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <h1>OpenStaxx Test</h1>
      <ListForm addItem={addItem} />
      <List
        items={items}
        togglePending={togglePending}
        removeItem={removeItem}
      />
    </div>
  );
}

export default App;
