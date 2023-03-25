import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <div className="NavBar__logo">
        <Link to="/home">ShopEase</Link>
      </div>
      <ul className="NavBar__list">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/products">Productos</Link>
        </li>
        <li>
          <Link to="/cart">Carrito</Link>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
        <li>
          <Link to="/register">Registrarse</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
