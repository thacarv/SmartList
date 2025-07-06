import { useState } from "react";

import List from "./List.jsx";
import TotalValue from "./TotalValue.jsx";
import CheckedList from "./CheckedList.jsx";

function Body({ itemList, setItemList, finalPrice, setFinalPrice }) {
  const [currentValue, setCurrentValue] = useState(0);

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
    const itemFullPrice = type
      ? parseFloat(finalPrice) + parseFloat(item.price)
      : parseFloat(finalPrice) - parseFloat(item.price);
    console.log(itemFullPrice);
    console.log(typeof itemFullPrice);
    setFinalPrice(itemFullPrice.toFixed(2));
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
    <div>
      <List
        itemList={itemList}
        onItemClick={onItemClick}
        onExcludeClick={onExcludeClick}
        onPlusClick={onPlusClick}
      />
      <CheckedList itemList={itemList} />
      <TotalValue
        itemList={itemList}
        finalPrice={finalPrice}
        currentValue={currentValue}
      />
    </div>
  );
}

export default Body;
