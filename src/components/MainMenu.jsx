import "./css/MainMenu.scss";
import TopMenu from "./TopMenu";
import SearchBar from "./SearchBar";
import Dropdown from "./DropDown";
import { useState } from "react";

function MainMenu(onAddItemSubmit) {
  const [searching, setSearch] = useState(false);

  function onSearchClick() {
    setSearch(true);
  }
  function notSearching() {
    setSearch(false);
  }

  return (
    <div className="menu-main">
      <TopMenu className="component" />
      <SearchBar
        className="component"
        onAddItemSubmit={onAddItemSubmit}
        searching={searching}
        onSearchClick={onSearchClick}
        notSearching={notSearching}
      />
      <Dropdown searching={searching} />
    </div>
  );
}

export default MainMenu;
