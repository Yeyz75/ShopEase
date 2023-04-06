import React, { useState } from "react";
import { db, collection, addDoc, getDocs } from "../../services/firebase";

const AddProductForm = ({ products, setProducts }) => {
  // Creamos un estado local para el formulario
  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    price: "",
    image: "",
  });

  // Esta función se ejecuta cada vez que el usuario escribe en un campo del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Actualizamos solo la propiedad que ha cambiado
    setProductData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Esta función se ejecuta cuando el usuario envía el formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Agregamos los datos del producto a la base de datos
      const docRef = await addDoc(collection(db, "products"), {
        productName: productData.productName,
        description: productData.description,
        price: productData.price,
        image: productData.image,
      });
      console.log("Producto agregado con ID: ", docRef.id);
      // Limpiamos los campos del formulario
      setProductData({
        productName: "",
        description: "",
        price: "",
        image: "",
      });

      // Actualizamos la lista de productos que se muestra en la aplicación
      const productsRef = collection(db, "products");
      const querySnapshot = await getDocs(productsRef);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
    } catch (error) {
      console.log("Error agregando producto: ", error);
    }
  };

  // Renderizamos el formulario
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="productName">Nombre del producto:</label>
      <input
        type="text"
        id="productName"
        name="productName"
        value={productData.productName}
        onChange={handleChange}
      />

      <label htmlFor="description">Descripción:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={productData.description}
        onChange={handleChange}
      />

      <label htmlFor="price">Precio:</label>
      <input
        type="number"
        id="price"
        name="price"
        value={productData.price}
        onChange={handleChange}
      />

      <button type="submit">Agregar producto</button>
    </form>
  );
};

export default AddProductForm;
