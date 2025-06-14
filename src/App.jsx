import "./App.css";
import MainMenu from "./components/MainMenu.jsx";
import List from "./components/List.jsx";
import TotalValue from "./components/TotalValue.jsx";

import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [itemList, setItemList] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  function onAddItemSubmit(item, price) {
    const newItem = {
      id: v4(),
      item,
      price,
      isChecked: false,
    };
    const newPrice = finalPrice + price;

    setItemList([...itemList, newItem]);
    setFinalPrice(newPrice);
  }

  function onItemClick(itemID) {
    const updateItem = itemList.map((item) => {
      if (item.id === itemID) {
        checkCurrentValue(item);
        return { ...item, isChecked: !item.isChecked };
      }

      return item;
    });
    setItemList(updateItem);
  }

  function checkCurrentValue(item) {
    const newValue = item.isChecked
      ? currentValue - item.price
      : currentValue + item.price;
    setCurrentValue(newValue);
  }

  return (
    <>
      <MainMenu onAddItemSubmit={onAddItemSubmit} itemList={itemList} />
      <List itemList={itemList} onItemClick={onItemClick} />
      <TotalValue
        itemList={itemList}
        finalPrice={finalPrice}
        currentValue={currentValue}
      />
    </>
  );
}

export default App;
