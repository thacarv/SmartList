import "./css/TopMenu.scss";
import { Menu, ChevronDown, CircleUserRound } from "lucide-react";

function TopMenu() {
  const iconColor = "#333333";

  return (
    <div className="top-menu">
      <button>
        <Menu color={iconColor} />
      </button>
      <div className="list-name">
        <h2>
          Nome da Lista <ChevronDown className="font-bold" />
        </h2>
      </div>
      <div className="user-icon">
        <CircleUserRound color={iconColor} size={40} />
      </div>
    </div>
  );
}

export default TopMenu;
