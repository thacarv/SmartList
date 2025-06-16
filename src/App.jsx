import "./App.css";
import MainMenu from "./components/MainMenu.jsx";
import List from "./components/List.jsx";
import TotalValue from "./components/TotalValue.jsx";

import { useState } from "react";
import { v4 } from "uuid";
import Body from "./components/Body.jsx";

function App() {
  const [itemList, setItemList] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  function onAddItemSubmit(item, price) {
    const newItem = {
      id: v4(),
      item,
      price,
      count: 1,
      isChecked: false,
      toExclude: false,
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
    const itemFullPrice = item.price * item.count;
    const newValue = item.isChecked
      ? currentValue - itemFullPrice
      : currentValue + itemFullPrice;
    setCurrentValue(newValue);
  }

  function checkCurrentFinalPrice(item, type) {
    const price = item.price * item.count;
    console.log(price);
    const itemFullPrice = type
      ? finalPrice + price
      : finalPrice - price / item.count;

    setFinalPrice(itemFullPrice);
  }

  function onExcludeClick(itemID) {
    const updateItem = itemList
      .map((item) => {
        if (item.id === itemID) {
          checkCurrentFinalPrice(item, false);
          if (item.count === 1) {
            return { ...item, toExclude: true };
          }
          const result = item.count - 1;
          return { ...item, count: result };
        }
        return item;
      })
      .filter((item) => item.toExclude === false);

    setItemList(updateItem);
  }

  function onPlusClick(itemID) {
    const updateItem = itemList.map((item) => {
      if (item.id === itemID) {
        const result = item.count + 1;
        checkCurrentFinalPrice(item, true);
        return { ...item, count: result };
      }
      return item;
    });
    setItemList(updateItem);
  }

  return (
    <>
      <MainMenu onAddItemSubmit={onAddItemSubmit} itemList={itemList} />
      <List
        itemList={itemList}
        onItemClick={onItemClick}
        onExcludeClick={onExcludeClick}
        onPlusClick={onPlusClick}
      />
      <TotalValue
        itemList={itemList}
        finalPrice={finalPrice}
        currentValue={currentValue}
      />
    </>
  );
}

export default App;
