import { Search } from "lucide-react";
import "./css/SearchBar.scss";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-area">
        <div className="search-icon">
          <Search color="#333333" />
        </div>
        <input type="text" placeholder="Adicionar item" />
      </div>
    </div>
  );
}

export default SearchBar;
