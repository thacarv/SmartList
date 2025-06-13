import { useState } from "react";
import "./css/TotalValue.scss";

function TotalValue({ itemList, finalPrice }) {
  const [currentValue, setCurrentValue] = useState(0);

  function checkCurrentValue() {
    let newValue = itemList.forEach((item) =>
      item.isChecked ? newValue + item.price : +0
    );
    setCurrentValue(newValue);
  }

  return (
    <div className="bottom-text-value ">
      <h3>
        {itemList.filter((item) => item.isChecked === true).length}/
        {itemList.length}
      </h3>
      <h3>{finalPrice}R$</h3>
      <h3>{currentValue}</h3>
    </div>
  );
}

export default TotalValue;
