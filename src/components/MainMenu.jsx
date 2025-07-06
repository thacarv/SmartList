import "./css/MainMenu.scss";
import SearchBar from "./SearchBar";
import Dropdown from "./DropDown";
import { useEffect, useState } from "react";
import axios from "axios";

function MainMenu({ onAddItemSubmit }) {
  const [searching, setSearch] = useState(false);
  const [searchArray, setSearchArray] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost/listadecompras/getitem.php"
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
  }

  function onChangeEvent(value) {
    let inputValue = value.toLowerCase();
    onSearchItem(inputValue);
  }

  function onSearchItem(inputValue) {
    let arr = products.filter((data) => {
      return data.nome_completo.toLowerCase().startsWith(inputValue);
    });
    setSearchArray(arr);
  }

  return (
    <div className="menu-main">
      <SearchBar
        className="component"
        searching={searching}
        onSearchClick={onSearchClick}
        onChangeEvent={onChangeEvent}
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
