import { CircleMinus, CirclePlus, Trash } from "lucide-react";
import "./css/List.scss";

function List(props) {
  // Função que utiliza de Regex para separar o nome do protudo da unidade
  function handlesItemName(item) {
    const palavrasParaExcluir = ["aproximadamente", "aprox"];
    let regexQuantidade =
      /\d+(?:[.,]\d+)?\s*(?<!\p{L})(?:kg|g|l|ml|dz|unidades|unidade|unds|litros|litro)(?!\p{L})/giu;

    let itemName = item.toLowerCase().replace(".", "");

    // For loop que testa as palavras para excluir.
    for (let palavra in palavrasParaExcluir) {
      palavra = palavrasParaExcluir[palavra];
      if (itemName.includes(palavra)) {
        itemName = itemName.replace(palavra, "");
      }
    }
    let quantidade;

    try {
      quantidade = itemName.match(regexQuantidade)[0].replace(" ", "");
    } catch {
      quantidade = "produto";
    }

    itemName = itemName.split(regexQuantidade)[0].trim().toUpperCase();
    return [itemName, quantidade];
  }

  return (
    <div className={"list-main"}>
      {props.itemList.map((item) => (
        <div
          className={`list-item ${item.isChecked ? "checked" : null}`}
          key={item.id}
        >
          <div
            onClick={() => props.onItemClick(item.id, item.price)}
            className="item-container"
          >
            <div className="item-description">
              <h2>{handlesItemName(item.item)[0]}</h2>
              <div className="item-price">
                <h3>
                  R$ {item.price}/{handlesItemName(item.item)[1]}
                </h3>
              </div>
            </div>
          </div>
          <div className="item-count">
            <div
              onClick={() => props.onExcludeClick(item.id)}
              className={`controls ${item.isChecked ? "shown" : ""}`}
            >
              {item.count === 1 ? (
                <Trash color="#333333" />
              ) : (
                <CircleMinus color="#333333" />
              )}
            </div>
            <span>{item.count}</span>
            <div
              onClick={() => props.onPlusClick(item.id)}
              className={`controls ${item.isChecked ? "shown" : ""}`}
            >
              <CirclePlus color="#333333" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
