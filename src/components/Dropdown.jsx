import "./css/Dropdown.scss";

function Dropdown({ notSearching, searching, onAddItemSubmit, searchArray }) {
  return (
    <div className={`dropdown ${searching ? "searching" : null}`}>
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
            <h3>{item.nome_completo}</h3> <p>R$ {item.valor}</p>
          </div>
        ))}
      </div>
      <div onClick={notSearching} className="background"></div>
    </div>
  );
}

export default Dropdown;
