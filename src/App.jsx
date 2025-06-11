import "./App.css";
import MainMenu from "./components/MainMenu.jsx";
import List from "./components/List.jsx";
import TotalValue from "./components/TotalValue.jsx";

import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const mockList = [
    {
      id: v4(),
      item: "banana",
      price: 2,
      isChecked: false,
    },
    {
      id: v4(),
      item: "maçã",
      price: 4,
      isChecked: false,
    },
    {
      id: v4(),
      item: "pera",
      price: 3,
      isChecked: false,
    },
  ];

  const [itemList, setItemList] = useState(mockList);

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
      <List itemList={itemList} />
      <TotalValue />
    </>
  );
}

export default App;
