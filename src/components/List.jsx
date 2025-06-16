import { CircleMinus, CirclePlus, Info, Trash } from "lucide-react";
import "./css/List.scss";

function List(props) {
  return (
    <div className={"list-main"}>
      {props.itemList.map((item) => (
        <div
          className={`list-item ${item.isChecked ? "checked" : null}`}
          key={item.id}
        >
          <div
            onClick={() => props.onItemClick(item.id, item.price)}
            className="item-container"
          >
            <div className="item-description">
              <h2>{item.item.toUpperCase()}</h2>
              <div className="item-price">
                <Info color="#FFB854" />
                <h3>{item.price}R$/Kg</h3>
              </div>
            </div>
          </div>
          <div className="item-count">
            <div
              onClick={() => props.onExcludeClick(item.id)}
              className="item-minus-trash"
            >
              {item.count === 1 ? (
                <Trash color="#333333" />
              ) : (
                <CircleMinus color="#333333" />
              )}
            </div>
            {item.count}
            <div
              onClick={() => props.onPlusClick(item.id)}
              className="item-plus"
            >
              <CirclePlus color="#333333" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
