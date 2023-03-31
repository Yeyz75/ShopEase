import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default Product;
