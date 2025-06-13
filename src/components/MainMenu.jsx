import "./css/MainMenu.scss";
import TopMenu from "./TopMenu";
import SearchBar from "./SearchBar";
import Dropdown from "./DropDown";
import { useState } from "react";

function MainMenu({ onAddItemSubmit, itemList }) {
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
        searching={searching}
        onSearchClick={onSearchClick}
      />
      <Dropdown
        notSearching={notSearching}
        searching={searching}
        itemList={itemList}
        onAddItemSubmit={onAddItemSubmit}
      />
    </div>
  );
}

export default MainMenu;
