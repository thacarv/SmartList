import "./css/List.scss";

function List() {
  return (
    <div className="list-main">
      <div>
        <div className="list-item">
          <label className="item-container">
            <h2>Lorem ipsum</h2>
            <h3>R$</h3>
            <input type="checkbox" name="itemcheck1" id="itemcheck1" />
          </label>
        </div>
        <div className="list-item">
          <label className="item-container">
            <h2>Lorem ipsum</h2>
            <h3>R$</h3>
            <input type="checkbox" name="itemcheck2" id="itemcheck2" />
          </label>
        </div>
        <div className="bottom-text-value ">
          <h3 className="">1/30</h3>
          <h3>(Valor final)</h3>
          <h3>(Valor atual)</h3>
        </div>
      </div>
    </div>
  );
}

export default List;
