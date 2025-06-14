import "./css/TotalValue.scss";

function TotalValue({ itemList, finalPrice, currentValue }) {
  return (
    <div className="bottom-text-value ">
      <h3>
        {itemList.filter((item) => item.isChecked === true).length}/
        {itemList.length}
      </h3>
      <h3>{currentValue}R$</h3>
      <h3>{finalPrice}R$</h3>
    </div>
  );
}

export default TotalValue;
