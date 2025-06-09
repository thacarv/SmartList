import "./TopMenu.css";
import { Menu } from "lucide-react";

function TopMenu() {
  return (
    <div className="menu-main">
      <div>
        <button>
          {" "}
          <Menu />
        </button>
      </div>
      <div>
        <h1>Menu</h1>
      </div>
      <div></div>
    </div>
  );
}

export default TopMenu;
