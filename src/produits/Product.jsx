import React from "react";
import { Link } from "react-router-dom";
const Product = ({ p }) => {
  return (
    <div>
      <Link to={`/details/${p.id}`}>
        <img src={p.images[0]} alt={p.title} width="300" />
        <h1>{p.title}</h1>
        <h4>{p.price} $</h4>
      </Link>
    </div>
  );
};

export default Product;
