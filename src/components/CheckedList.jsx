import "./css/CheckedList.scss";

function CheckedList({ itemList }) {
  function checkItemTrue(item, i, arr) {
    if (item.isChecked === true && i === arr[0]) {
      console.log("oi");
      return true;
    }
    return false;
  }

  return (
    <div className="checked-list-main">
      {itemList.map((item, i, arr) =>
        checkItemTrue(item, i, arr) ? (
          <div className="checked-container">
            <h3 className="checked-name">{item.item}</h3>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default CheckedList;
