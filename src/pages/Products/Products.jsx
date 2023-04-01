import React, { useState } from "react";
import Product from "../../components/Product";
import getProductBrands from "../../services/productapi";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [numProductsToShow] = useState(20);
  const [loaded, setLoaded] = useState(false);

  const handleClick = async () => {
    if (!loaded) {
      const data = await getProductBrands();
      setProducts(data);
      setLoaded(true);
    }
  };

  return (
    <div className="products">
      <div className="header">
        <h1>Bienvenidos a ShopEase</h1>
        <p>
          Aquí se muestran todos los productos disponibles en nuestra tienda
          online:
        </p>
      </div>
      <div className="product-wrapper">
        {loaded &&
          products.slice(0, numProductsToShow).map((product) => (
            <div key={product.id} className="product-container">
              <Product product={product} />
            </div>
          ))}
      </div>
      <button onClick={handleClick}>Mostrar más</button>
    </div>
  );
};

export default Products;
