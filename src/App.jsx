import "./App.css";
import MainMenu from "./components/MainMenu.jsx";
import List from "./components/List.jsx";
import TotalValue from "./components/TotalValue.jsx";

import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [itemList, setItemList] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);

  function onAddItemSubmit(item, price) {
    const newItem = {
      id: v4(),
      item,
      price,
      isChecked: false,
    };

    setItemList([...itemList, newItem]);
  }

  function onItemClick(itemID) {
    const updateItem = itemList.map((item) => {
      if (item.id === itemID) {
        return { ...item, isChecked: !item.isChecked };
      }

      return item;
    });
    setItemList(updateItem);
  }

  return (
    <>
      <MainMenu onAddItemSubmit={onAddItemSubmit} itemList={itemList} />
      <List itemList={itemList} onItemClick={onItemClick} />
      <TotalValue itemList={itemList} finalPrice={finalPrice} />
    </>
  );
}

export default App;
