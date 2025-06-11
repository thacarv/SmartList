import "./css/List.scss";

function List(props) {
  console.log(props.itemList);

  return (
    <div className="list-main">
      <div className="list-item">
        {props.itemList.map((item) => (
          <div key={item.id} className="item-container">
            <h2>{item.item}</h2>
            <h3>{item.price}R$</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
