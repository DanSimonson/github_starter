import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListItem from "./components/ListItem";
import List from "./components/List";
import ListForm from "./components/ListForm";
import styled from "styled-components";
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
    console.log("items: ", items);
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
  function sortArray() {
    let sorted = [...items];
    if (sorted.length > 1) {
      sorted.sort((a, b) => (a.description > b.description ? 1 : -1));
      setItems(sorted);
    }
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
