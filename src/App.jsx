import "./App.css";
import MainMenu from "./components/MainMenu.jsx";
import List from "./components/List.jsx";

import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [itemList, setItemList] = useState([]);

  function onAddItemSubmit(item, price) {
    const newItem = {
      id: v4(),
      item,
      price,
      isChecked: false,
    };

    setItemList([...itemList, newItem]);
  }

  return (
    <>
      <MainMenu onAddItemSubmit={onAddItemSubmit} />
      <List />
    </>
  );
}

export default App;
