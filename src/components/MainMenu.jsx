import "./css/MainMenu.scss";
import SearchBar from "./SearchBar";
import Dropdown from "./DropDown";
import { useEffect, useState } from "react";
import axios from "axios";

function MainMenu({ onAddItemSubmit }) {
  const [searching, setSearch] = useState(false);
  const [searchArray, setSearchArray] = useState([]);
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("Adicionar item");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://cybernow.com.br/SmartList/api/"
        );
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  // const mockList = [
  //   {
  //     id: v4(),
  //     item: "banana",
  //     price: 2,
  //     count: 1,
  //     isChecked: false,
  //   },
  //   {
  //     id: v4(),
  //     item: "maçã",
  //     price: 4,
  //     count: 1,
  //     isChecked: false,
  //   },
  //   {
  //     id: v4(),
  //     item: "pera",
  //     price: 3,
  //     count: 1,
  //     isChecked: false,
  //   },
  // ];

  function onSearchClick() {
    setSearch(true);
  }
  function notSearching() {
    setSearch(false);
    setInputValue("");
  }

  function onChangeEvent(value) {
    setInputValue(value.toLowerCase());
    onSearchItem(inputValue);
  }

  // Função que ordena alfabeticamente a array desejada.
  function sortingSearchedItemsArray(arr) {
    let result = arr.sort((item1, item2) => {
      const nome1 = item1.nome_completo.toUpperCase(); // ignore upper and lowercase
      const nome2 = item2.nome_completo.toUpperCase(); // ignore upper and lowercase
      if (nome1 < nome2) {
        // Internamente, verifica qual vem primeiro no alfabeto.
        return -1;
      }
      if (nome1 > nome2) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    return result;
  }

  // Função que recebe os itens salvos do BD e filtra de acordo com o nome do item pesquisado no SearchBar.
  function onSearchItem(inputValue) {
    // Array que vai receber os itens salvos do BD na variável products
    let arr = products
      .filter((data) => {
        if (inputValue === "") {
          return;
        } else {
          return data.nome_completo.toLowerCase().includes(inputValue);
        }
      })
      .slice(0, 50);

    let arr_rt = []; // Array de retorno

    let arrSW = arr.filter((data) => {
      // Array filtrado para apenas startsWith nome pesquisado.
      let itemSW = data.nome_completo.toLowerCase().startsWith(inputValue);
      if (itemSW) {
        return itemSW;
      } else {
        arr_rt.push(data);
      }
    });

    let finalSortedArray = sortingSearchedItemsArray(arrSW).concat(
      sortingSearchedItemsArray(arr_rt)
    );

    setSearchArray(finalSortedArray);
  }

  return (
    <div className="menu-main">
      <SearchBar
        className="component"
        searching={searching}
        onSearchClick={onSearchClick}
        onChangeEvent={onChangeEvent}
        inputValue={inputValue}
      />
      <Dropdown
        notSearching={notSearching}
        searching={searching}
        onAddItemSubmit={onAddItemSubmit}
        searchArray={searchArray}
      />
    </div>
  );
}

export default MainMenu;
