import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/index";
import "./Product.css";

const Product = ({ name, image, price, onAddToCart }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <Button onClick={onAddToCart}>Add to Cart</Button>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Product;
