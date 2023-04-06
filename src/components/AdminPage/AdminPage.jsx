import React, { useState, useEffect } from "react";
import { db } from "../../services/firebase";

import "./AdminPage.css";

const AdminPage = () => {
  const [products, setProducts] = useState([]);

  // Use useEffect hook to get products from Firebase on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await db.collection("products").get(); // Obtiene los datos de la colección "products" de Firebase
      setProducts(data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))); // Mapea los datos obtenidos y los actualiza en el estado local del componente
    };
    fetchProducts(); // Ejecuta la función fetchProducts en el montaje del componente
  }, []);

  // Agregar lógica para manejar productos
  const handleAddProduct = () => {
    // Agregar un nuevo producto a Firebase y actualizar el estado local del componente
  };

  const handleUpdateProduct = (productId, updatedProductData) => {
    // Actualizar un producto existente en Firebase y actualizar el estado local del componente
  };

  const handleDeleteProduct = (productId) => {
    // Eliminar un producto de Firebase y actualizar el estado local del componente
  };

  return (
    <div>
      <h1>Administrando...</h1>
      {/* Agregar componentes e interfaz de usuario para manejar productos */}
    </div>
  );
};

export default AdminPage;
