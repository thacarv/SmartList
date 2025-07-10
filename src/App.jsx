import "./App.css";
import MainMenu from "./components/MainMenu.jsx";
import { useState } from "react";
import Body from "./components/Body.jsx";

function App() {
  const [itemList, setItemList] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);

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

  return (
    <>
      <MainMenu onAddItemSubmit={onAddItemSubmit} itemList={itemList} />
      <Body
        itemList={itemList}
        setItemList={setItemList}
        finalPrice={finalPrice}
        setFinalPrice={setFinalPrice}
      />
    </>
  );
}

export default App;
