import React, { useRef, useState, useEffect } from "react";

function TodoList() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("todoItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [toggle, setToggle] = useState({ show: false, id: "" });
  const editRef = useRef(null);

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  function displayItems(e) {
    setItem(e.target.value);
  }

  function addItems() {
    // ❌ Prevent empty or whitespace-only tasks
    if (item.trim() === ""){
        alert("Error: cannot add empty task")
        return
    };

    const newItem = {
      text: item,
      completed: false,
    };

    setItems([...items, newItem]);
    setItem("");
    editRef.current.value = "";
  }

  function removeItem(id) {
    const filteredItems = items.filter((_, index) => id !== index);
    setItems(filteredItems);
  }

  function editItem(id) {
    editRef.current.focus();
    setToggle({ show: true, id });
    setItem(items[id].text);
  }

  function updateItem() {
    if (item.trim() === "") return;

    const updatedItems = [...items];
    updatedItems[toggle.id].text = item;

    setItems(updatedItems);
    setToggle({ show: false, id: "" });
    setItem("");
  }

  // ✅ Toggle completion
  function toggleComplete(id) {
    const updatedItems = [...items];
    updatedItems[id].completed = !updatedItems[id].completed;
    setItems(updatedItems);
  }

  return (
    <div className="ToDoWindow">
      <div id="input-div">
        <input type="text" onChange={displayItems} ref={editRef} value={item} />
        <button id="add-btn" onClick={addItems}>
          Add
        </button>
        {toggle.show && (
          <button id="update-btn" onClick={updateItem}>
            Update
          </button>
        )}
      </div>

      {items.length === 0 && (
        <div id="item-empty-list">
          <h1>No items available</h1>
          <p>Click on add to add items to the list</p>
        </div>
      )}

      {items.map((ele, index) => {
        return (
          <div id="item-list" key={index}>
            <li>
              <div className="task-content">
                <input
                  type="checkbox"
                  checked={ele.completed}
                  onChange={() => toggleComplete(index)}
                />

                <span className="task-text">{ele.text}</span>
              </div>

              <div className="item-actions">
                <button
                  id="remove-btn"
                  className="item-btn"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>

                <button
                  id="edit-btn"
                  className="item-btn"
                  onClick={() => editItem(index)}
                >
                  Edit
                </button>
              </div>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
