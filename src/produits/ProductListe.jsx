import React, { useState } from "react";
import Product from "./Product";

const ProductListe = ({ data }) => {
  let cat = [...new Set(data.map((elm) => elm.category))];
  let [selectedCat, setSelectedCat] = useState("");
  let [search, setSearch] = useState("");
  let filtredData =
    selectedCat == "" || selectedCat == "ALL"
      ? data
      : data.filter((elm) => elm.category === selectedCat);
  filtredData = filtredData.filter((elm) =>
    elm.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setSelectedCat(e.target.value)}>
        <option value="ALL">ALL</option>
        {cat.map((elm) => (
          <option value={elm} key={elm}>
            {elm}
          </option>
        ))}
      </select>
      <div className="product-list">
        {filtredData.map((elm) => (
          <Product key={elm.id} p={elm} />
        ))}
      </div>
    </div>
  );
};
export default ProductListe;
