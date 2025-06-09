import "./css/MainMenu.scss";
import TopMenu from "./TopMenu";
import SearchBar from "./SearchBar";

function MainMenu() {
  return (
    <div className="menu-main">
      <TopMenu className="component" />

      <SearchBar className="component" />
    </div>
  );
}

export default MainMenu;
