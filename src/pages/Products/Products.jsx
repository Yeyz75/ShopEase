import React, { useState } from "react";
import Product from "../../components/Product/product";
import "./Products.css";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "https://via.placeholder.com/150",
      price: "$10",
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://via.placeholder.com/150",
      price: "$20",
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://via.placeholder.com/150",
      price: "$30",
    },
  ];

  return (
    <div className="products-container">
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
