import { Search } from "lucide-react";
import "./css/SearchBar.scss";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-area">
        <div className="search-icon">
          <Search color="#333333" />
        </div>
        <input
          type="text"
          name="searchform"
          id="searchform"
          placeholder="Coloque o nome do produto"
        />
      </div>
    </div>
  );
}

export default SearchBar;
