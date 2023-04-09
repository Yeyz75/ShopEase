import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="NavBar">
      <div className="NavBar__logo">
        <Link to="/home">ShopEase</Link>
      </div>
      <button
        className={`NavBar__toggle ${open ? "open" : ""}`}
        onClick={handleToggle}
        aria-label="Menú hamburguesa"
      >
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <ul className={`NavBar__list ${open ? "open" : ""}`}>
        <li className="li-Home">
          <Link to="/home">Home</Link>
        </li>
        <li className="li-products">
          <Link to="/products">Productos</Link>
        </li>
        <li className="li-carcheckout">
          <Link to="/carcheckout">Carrito</Link>
        </li>
        <li className="li-login">
          <Link to="/login">Iniciar Sesión</Link>
        </li>
        <li className="li-register">
          <Link to="/register">Registrarse</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
