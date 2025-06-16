import "./App.css";
import MainMenu from "./components/MainMenu.jsx";

import { useState } from "react";
import { v4 } from "uuid";
import Body from "./components/Body.jsx";

function App() {
  const [itemList, setItemList] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);

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
