import { ChevronDown, Search } from "lucide-react";
import "./css/SearchBar.scss";

function SearchBar(props) {
  return (
    <div className="top-menu">
      <button className="menu-button">MENU</button>
      <div className="search-bar">
        <div className="list-name">
          <h3>NOME DA LISTA</h3>
          <ChevronDown />
        </div>
        <div className="search-area">
          <div className="search-icon">
            <Search color="#333333" />
          </div>
          <input
            onFocus={props.onSearchClick}
            type="text"
            placeholder="Adicionar item"
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
