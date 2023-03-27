import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    // setItems(...items,e.target.value)
  };

  console.log(items);
  return (
    <div className="App">
      <form onSubmit={handleAdd}>
        <input
          type="text"
          onChange={(e) => {
            handleAdd(e);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
