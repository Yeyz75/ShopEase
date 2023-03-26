import React, { useState } from "react";
import Product from "../../components/Product/product";
import "./Products.css";

const Products = () => {
  const [cart, setCart] = useState([]);

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

  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    setCart([...cart, productToAdd]);
  };

  return (
    <div className="products-container">
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            onAddToCart={() => handleAddToCart(product.id)}
          />
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} ({product.price})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Products;
