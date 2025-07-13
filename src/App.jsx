import "./App.css";
import MainMenu from "./components/MainMenu.jsx";
import { useEffect, useState } from "react";
import Body from "./components/Body.jsx";

function App() {
  const [itemList, setItemList] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [finalPrice, setFinalPrice] = useState(
    JSON.parse(localStorage.getItem("finalPrice")) || 0
  );
  const [currentValue, setCurrentValue] = useState(
    JSON.parse(localStorage.getItem("currentValue")) || 0
  );

  function onAddItemSubmit(id, item, price) {
    const newItem = {
      id,
      item,
      price,
      count: 1,
      isChecked: false,
      toExclude: false,
    };
    const newPrice = parseFloat(finalPrice) + parseFloat(price);
    for (item in itemList) {
      if (itemList[item].id === newItem.id) {
        return;
      }
    }
    setItemList([...itemList, newItem]);
    setFinalPrice(newPrice);
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemList));
    localStorage.setItem("finalPrice", JSON.stringify(finalPrice));
    localStorage.setItem("currentValue", JSON.stringify(currentValue));
  }, [itemList, finalPrice, currentValue]);

  return (
    <>
      <div className="application">
        <MainMenu onAddItemSubmit={onAddItemSubmit} itemList={itemList} />
        <Body
          itemList={itemList}
          setItemList={setItemList}
          finalPrice={finalPrice}
          setFinalPrice={setFinalPrice}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
        />
      </div>
    </>
  );
}

export default App;
