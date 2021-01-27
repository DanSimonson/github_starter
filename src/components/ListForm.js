import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const DivForm = styled.div`
  width: 100%;
  height: 50%;
`;
function ListForm({ addItem }) {
  //const [test, setTest] = useState("");
  const [items, setItems] = useState({
    id: "",
    description: "",
    category: "general",
    quantity: "1",
    price: "1",
    pending: false,
  });

  function handleInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setItems({ ...items, description: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (items.description.trim()) {
      addItem({ ...items, id: uuidv4() });
      setItems({ ...items, description: "" });
    }
  }
  return (
    <DivForm>
      <form onSubmit={handleSubmit}>
        <input
          label="Description"
          type="text"
          name="description"
          value={items.description}
          onChange={handleInputChange}
        ></input>
        <button type="submit">Create</button>
      </form>
    </DivForm>
  );
}

export default ListForm;
