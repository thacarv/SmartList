import "./css/Dropdown.scss";

function Dropdown({ searching }) {
  const dropdown = ["maçã", "banana", "melancia", "pera"];
  const value = 10;

  return (
    <div className={`dropdown ${searching ? "searching" : null}`}>
      <div className="dropdown-content">
        {dropdown.map((item) => (
          <div
            className="dropdown-item"
            key={dropdown.indexOf(item) + 1}
            onClick={() => console.log(item)}
          >
            <h3>{item}</h3> <p>{value}R$</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
