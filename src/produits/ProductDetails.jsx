import React from "react";
import { useParams } from "react-router-dom";
import data from "./ProduitsData";
import {Link} from 'react-router-dom' ;

const ProductDetails = () => {
  let { id } = useParams();
  let p = data.find((elm) => elm.id == id);
  return (
    <div>
      <Link className="back-link" to="/">Back to Products</Link>
      <h1>Details</h1>
      <img src={p.images[0]}  width="200" />
      <img src={p.images[1]}  width="200" />
      <img src={p.images[2]}  width="200" />
      <h1>{p.title}</h1>
      <h3>{p.description}</h3>
      <h4>${p.price}</h4>
    </div>
  );
};

export default ProductDetails;
