import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Autenticación exitosa");
      navigate("/RegisterProducts");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleFormSubmit}>
        <h2 className="login-title">Inicio de sesión para administradores</h2>
        <div className="input-container">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailInputChange}
            aria-label="Ingrese su correo electrónico"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordInputChange}
            aria-label="Ingrese su contraseña"
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <div className="button-container">
          <button type="submit">Iniciar sesión</button>
        </div>
      </form>
    </div>
  );
}

export default LoginAdmin;
