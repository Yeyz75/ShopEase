import React from "react";
import "./Products.css";

function Products() {
  const products = [
    {
      id: 1,
      name: "Producto 1",
      price: "$10.00",
      image: "https://via.placeholder.com/150x150",
      description: "Descripción del producto 1",
    },
    {
      id: 2,
      name: "Producto 2",
      price: "$20.00",
      image: "https://via.placeholder.com/150x150",
      description: "Descripción del producto 2",
    },
    {
      id: 3,
      name: "Producto 3",
      price: "$30.00",
      image: "https://via.placeholder.com/150x150",
      description: "Descripción del producto 3",
    },
  ];

  return (
    <div className="Products">
      {products.map((product) => (
        <div key={product.id} className="Products__item">
          <img
            className="Products__image"
            src={product.image}
            alt={product.name}
          />
          <div className="Products__info">
            <h3 className="Products__name">{product.name}</h3>
            <p className="Products__price">{product.price}</p>
            <p className="Products__description">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
