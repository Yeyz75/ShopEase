import React from "react";

const Product = ({ name, description, price, image }) => {
  return (
    <article className="product">
      <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      <p className="product__description">{description}</p>
      <p className="product__price">{price}</p>
      <button className="product__button">Add to cart</button>
    </article>
  );
};

export default Product;
