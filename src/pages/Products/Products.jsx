import React from "react";
import Product from "../../components/Product/index";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 10.99,
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://via.placeholder.com/150",
      description:
        "Praesent vel orci aliquet, blandit sapien quis, aliquam orci.",
      price: 24.99,
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://via.placeholder.com/150",
      description:
        "Nulla facilisi. Nullam tincidunt rutrum urna, vel accumsan metus mattis nec.",
      price: 14.99,
    },
  ];

  return (
    <div className="products">
      <h1>Bienvenidos a ShopEase</h1>
      <p>
        Aquí se muestran todos los productos disponibles en nuestra tienda
        online:
      </p>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
