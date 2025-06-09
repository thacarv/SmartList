import "./css/List.scss";
import { Apple } from "lucide-react";

function List() {
  return (
    <div className="list-main">
      <div>
        <div className="list-item">
          <Apple />
          <h2>Lorem ipsum</h2>
          <h3>R$</h3>
          <input type="checkbox" name="itemcheck1" id="itemcheck1" />
        </div>
        <div className="list-item">
          <Apple />
          <h2>Lorem ipsum</h2>
          <h3>R$</h3>
          <input type="checkbox" name="itemcheck2" id="itemcheck2" />
        </div>
        <div className="bottom-text-value">
          <h3>N° de itens</h3>
          <h3>(Valor final)</h3>
        </div>
      </div>
    </div>
  );
}

export default List;
