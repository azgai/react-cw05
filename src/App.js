import React from "react";
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import List from "./List";
import FilteredList from "./FilteredList";
import "./App.css";
function App() {
  const simpleList = ["Apple", "Banana", "Carrot"];

  const items = [
    { name: "Apple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
    { name: "Carrot", type: "Vegetable" },
    { name: "Broccoli", type: "Vegetable" }
  ];

  return (
    <div>
      <HelloWorld />
      <Counter />
      <List items={simpleList} />
      <FilteredList items={items} />
    </div>
  );
}

export default App;