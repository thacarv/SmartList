import { Search } from "lucide-react";
import "./css/SearchBar.scss";

function SearchBar(props) {
  return (
    <div className="top-menu">
      <div className="search-bar">
        <div className="list-name">
          <img src="src/assets/tartarugas-em-compras.png" alt="" />
          <h3>SmartList</h3>
        </div>
        <div className={`search-area ${props.searching ? "searching" : ""}`}>
          <div className="search-icon">
            <Search color="#333333" />
          </div>
          <input
            onFocus={props.onSearchClick}
            type="text"
            placeholder="Adicionar item"
            value={props.inputValue}
            onChange={(event) => {
              props.onChangeEvent(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
