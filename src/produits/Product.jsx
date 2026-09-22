import { Link } from "react-router-dom";
const Product = ({ p }) => {
  return (
    <div className="product-card">
      <Link to={`/details/${p.id}`} className="product-link">
        <img src={p.images[0]} alt={p.title} />
        <h3>{p.title}</h3>
        <p className="price">{p.price} $</p>
      </Link>
    </div>
  );
};

export default Product;
