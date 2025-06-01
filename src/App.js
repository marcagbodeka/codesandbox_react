import { useState } from "react";
import { Input } from "./components/forms/Input";
import { Checkbox } from "./components/forms/checkebox";
import { ProductRow } from "./components/products/ProductRow";
import { ProductCategoryRow } from "./components/products/productCategoryRow";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function SearchBar() {
  return (
    <div>
      <div className="mb-3">
        <Input value="" placeholder="Rechercher..." onChange={() => null} />
        <Checkbox
          id="stocked"
          checked={false}
          onChange={() => null}
          label="N'affichez que les produits en stock"
        />
      </div>
    </div>
  );
}

function ProductsTbale({ products }) {
  return;
}

/*const title = "Bonjour les gens ";

const style = {
  color: "red",
  backgroundColor: "blue",
};

const showTilte = true;

const todos = ["Chien royale", "Chien togolais", "Chien sénégalais"];*/

export default function App() {
  /* const handleClick = () => {
    alert(" j'ai cliqué sur le titre ");
  };*/

  const [count, setCount] = useState(0);

  const [checked, setChecked] = useState(true);

  const Increment = () => {
    setCount(count + 1);
  };

  const Change = () => {
    setChecked(!checked);
  };

  return (
    /* <div>
      {showTilte ? (
        <h1 style={style} onClick={handleClick}>
          {title}
        </h1>
      ) : (
        <p> Chien </p>
      )}
      <input type="text" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nihil
        eligendi perspiciatis modi. Labore, earum! Eveniet soluta facere
        reiciendis harum cum culpa possimus explicabo officiis? Ducimus fugiat
        debitis tenetur nemo?
      </p>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>*/

    <div className="container my-3">
      <SearchBar />
      <p>Compteur : {count}</p>
      <button onClick={Increment}>Incrémenter</button> <br /> <br />
      <input type="text" />
      <input type="checkbox" onChange={Change} checked={!checked} />
      <button disabled={checked}> envoyer</button>
    </div>
  );
}
