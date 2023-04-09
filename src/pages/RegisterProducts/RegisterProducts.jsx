import React, { useEffect } from "react";
import "./RegisterProducts.css";
import AdminPage from "../../components/AdminPage/index";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

const RegisterProducts = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/LoginAdmin"); // redirige a la página de inicio de sesión si el usuario no está autenticado
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate("/LoginAdmin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>Registro De Productos</h1>
      <section className="adminPageContainer">
        <AdminPage />
        <button onClick={handleSignOut}>Cerrar sesión</button>
      </section>
    </main>
  );
};

export default RegisterProducts;
