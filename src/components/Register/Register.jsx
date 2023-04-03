import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Registro de usuario</h2>
        <label htmlFor="name">Nombre:</label>
        <input
          className="register-input"
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Correo electrónico:</label>
        <input
          className="register-input"
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          className="register-input"
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          required
        />

        <button className="register-button" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
