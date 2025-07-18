import "./css/TotalValue.scss";

function TotalValue({ itemList, finalPrice, currentValue }) {
  finalPrice = parseFloat(finalPrice).toFixed(2);
  currentValue = parseFloat(currentValue).toFixed(2);

  return (
    <div className="bottom-text-value ">
      <h3>
        {itemList.filter((item) => item.isChecked === true).length}/
        {itemList.length}
      </h3>
      <h3>R$ {currentValue}</h3>
      <h3>R$ {finalPrice}</h3>
    </div>
  );
}

export default TotalValue;
