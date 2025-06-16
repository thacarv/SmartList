import "./css/Dropdown.scss";
import { v4 } from "uuid";

function Dropdown({ notSearching, searching, onAddItemSubmit }) {
  const mockList = [
    {
      id: v4(),
      item: "banana",
      price: 2,
      count: 1,
      isChecked: false,
    },
    {
      id: v4(),
      item: "maçã",
      price: 4,
      count: 1,
      isChecked: false,
    },
    {
      id: v4(),
      item: "pera",
      price: 3,
      count: 1,
      isChecked: false,
    },
  ];

  return (
    <div className={`dropdown ${searching ? "searching" : null}`}>
      <div className="dropdown-content">
        {mockList.map((item) => (
          <div
            onClick={() => onAddItemSubmit(item.item, item.price)}
            className="dropdown-item"
            key={item.id}
          >
            <h3>{item.item}</h3> <p>{item.price}R$</p>
          </div>
        ))}
      </div>
      <div onClick={notSearching} className="background"></div>
    </div>
  );
}

export default Dropdown;
