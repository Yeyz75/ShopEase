import React from "react";
function Home() {
  return (
    <div className="home">
      <div className="home__banner">
        <h1>Bienvenido a ShopEase</h1>
        <p>
          Explora nuestra selección de productos destacados y ofertas especiales
        </p>
        <button>Explorar productos</button>
      </div>
      <div className="home__services">
        <div className="home__services-item">
          <i className="fas fa-shipping-fast"></i>
          <h2>Envío gratuito</h2>
          <p>En compras superiores a $50</p>
        </div>
        <div className="home__services-item">
          <i className="fas fa-undo"></i>
          <h2>Devoluciones fáciles</h2>
          <p>Hasta 30 días después de la compra</p>
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
          <img src="https://via.placeholder.com/150" alt="Categoría 1" />
          <h3>Categoría 1</h3>
        </div>
        <div className="home__category-item">
          <img src="https://via.placeholder.com/150" alt="Categoría 2" />
          <h3>Categoría 2</h3>
        </div>
        <div className="home__category-item">
          <img src="https://via.placeholder.com/150" alt="Categoría 3" />
          <h3>Categoría 3</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
