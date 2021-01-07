import React from "react";
import { Link } from "react-router-dom";
// import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium-center" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>
            {product.name}{" "}
            <div className="artist-desc">by {product.artist}</div>
          </h2>
        </Link>
        {/* <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating> */}
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}