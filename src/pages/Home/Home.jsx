import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const rutaBaseImage = process.env.PUBLIC_URL + "/images/";

function Home() {
  return (
    <main className="home">
      <section className="home__banner">
        <div className="home__banner-overlay">
          <h1>Bienvenido a ShopEase</h1>
          <p>
            Explora nuestra selección de productos destacados y ofertas
            especiales
          </p>
          <Link to="/products">
            <button>Explorar productos</button>
          </Link>
        </div>
      </section>
      <section className="home__services">
        <div className="home__services-item">
          <i className="fas fa-shipping-fast"></i>
          <h2>Envío gratuito</h2>
          <p>En compras superiores a $50</p>
        </div>
        <div className="home__services-item">
          <i className="fas fa-wallet"></i>
          <h2>Pagos seguros</h2>
          <p>Utilizamos encriptación SSL</p>
        </div>
      </section>
      <section className="home__categories">
        <div className="home__categories-header">
          <h2>Explora nuestras categorías de productos</h2>
        </div>
        <div className="home__categories-items">
          <div className="home__category-item">
            <img src={rutaBaseImage + "calzado1.jpg"} alt="Categoría 1" />
            <h3>Calzado</h3>
          </div>
          <div className="home__category-item">
            <img src={rutaBaseImage + "ropa1.jpg"} alt="Categoría 2" />
            <h3>Ropa</h3>
          </div>
          <div className="home__category-item">
            <img src={rutaBaseImage + "varios1.jpg"} alt="Categoría 3" />
            <h3>Varios</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
