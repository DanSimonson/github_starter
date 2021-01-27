import React from "react";

function List({ items, togglePending, removeItem }) {
  let sorted = [...items];
  sorted.sort((a, b) => (a.description > b.description ? 1 : -1));
  let pendingListArray = [];
  let crossedOffListArray = [];
  let summedArray = [];
  renderList();

  function handlePendingClick(event, id) {
    togglePending(id);
  }
  function handleRemoveClick(event, id) {
    //stop event propogation
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      removeItem(id);
    }
  }

  function renderList() {
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i].pending) {
        crossedOffListArray.push(sorted[i]);
      } else {
        pendingListArray.push(sorted[i]);
      }
    }
    sumPendingItems(pendingListArray);
  }

  function sumPendingItems(pendingItems) {
    let sum = 0;
    for (let i = 0; i < pendingItems.length; i++) {
      sum += parseInt(pendingItems[i].price);
    }
    summedArray.push(sum);
  }

  return (
    <div>
      <h1>Pending List</h1>
      {pendingListArray.map((item, index) => (
        <div
          onClick={(event) => {
            handlePendingClick(event, item.id);
          }}
          key={item.id}
        >
          <p>Description: {item.description}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
          <button
            onClick={(event) => {
              handleRemoveClick(event, item.id);
            }}
          >
            X
          </button>
        </div>
      ))}
      <h1>Sum of Pending Items: {summedArray[0]} </h1>
      <h1>Crossed Off List</h1>
      {crossedOffListArray.map((item, index) => (
        <div
          onClick={(event) => {
            handlePendingClick(event, item.id);
          }}
          key={item.id}
        >
          <p>Description: {item.description}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
          <button
            onClick={(event) => {
              handleRemoveClick(event, item.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
