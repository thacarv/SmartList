import "./css/Dropdown.scss";

function Dropdown({ notSearching, searching, onAddItemSubmit, searchArray }) {
  function longName(itemName) {
    let nameArray = itemName.split(" ").slice(0, 9).join(" ");
    return nameArray;
  }

  return (
    <div className={`dropdown ${searching ? "down" : ""}`}>
      <div className="dropdown-content">
        {searchArray.map((item) => (
          <div
            onClick={() =>
              onAddItemSubmit(
                item.id,
                item.nome_completo,
                parseFloat(item.valor)
              )
            }
            className="dropdown-item"
            key={item.id}
          >
            <div className="nome-completo">
              <h3>{longName(item.nome_completo)}</h3>
            </div>
            <div className="valor-item">
              <p>R${item.valor}</p>
            </div>
          </div>
        ))}
      </div>
      <div onClick={notSearching} className="background"></div>
    </div>
  );
}

export default Dropdown;
