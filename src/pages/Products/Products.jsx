import "./Products.css";
import Product from "../../components/Product/product";

const Products = () => {
  return (
    <main id="main-content">
      <header>
        <h1>Descubre nuestra selección de productos</h1>
        <p>
          En ShopEase, ofrecemos una amplia variedad de productos de alta
          calidad.
        </p>
      </header>
      <section className="products-container">
        <h2>Our Products</h2>
        <div className="products">
          <Product
            name="Product 1"
            description="This is the description of product 1."
            price="19.99"
            image="https://via.placeholder.com/150"
          />
          <Product
            name="Product 2"
            description="This is the description of product 2."
            price="29.99"
            image="https://via.placeholder.com/150"
          />
          {/* Agrega más productos aquí */}
        </div>
      </section>
    </main>
  );
};

export default Products;
