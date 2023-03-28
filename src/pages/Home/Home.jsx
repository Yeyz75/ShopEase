import React from "react";
import { Link } from "react-router-dom";
import calzado1 from "../../assets/images/calzado1.jpg";
import ropa1 from "../../assets/images/ropa1.jpg";
import varios1 from "../../assets/images/varios1.jpg";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__banner">
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
      </div>
      <div className="home__services">
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
      </div>
      <div className="home__categories">
        <h2>Explora nuestras categorías de productos</h2>
        <div className="home__category-item">
          <img src={calzado1} alt="Categoría 1" />
          <h3>Calzado</h3>
        </div>
        <div className="home__category-item">
          <img src={ropa1} alt="Categoría 2" />
          <h3>Ropa</h3>
        </div>
        <div className="home__category-item">
          <img src={varios1} alt="Categoría 3" />
          <h3>Varios</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
