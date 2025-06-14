import "./css/List.scss";

function List(props) {
  return (
    <div className="list-main">
      <div className="list-item">
        {props.itemList.map((item) => (
          <div
            onClick={() => props.onItemClick(item.id, item.price)}
            key={item.id}
            className={`item-container ${item.isChecked ? "checked" : null}`}
          >
            <h2>{item.item}</h2>
            <h3>{item.price}R$</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
