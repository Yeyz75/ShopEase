import React, { useState } from "react";
import Product from "../../components/Product";
import getProductBrands from "../../services/productapi";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [numProductsToShow] = useState(10);
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
      <h1>Bienvenidos a ShopEase</h1>
      <p>
        Aquí se muestran todos los productos disponibles en nuestra tienda
        online:
      </p>
      {loaded &&
        products
          .slice(0, numProductsToShow)
          .map((product) => <Product key={product.id} product={product} />)}

      <button onClick={handleClick}>Mostrar más</button>
    </div>
  );
};

export default Products;
