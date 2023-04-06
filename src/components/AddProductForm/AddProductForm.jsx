import React, { useState } from "react";
import {
  db,
  collection,
  addDoc,
  getDocs,
} from "../../services/firebase";

const AddProductForm = ({ products, setProducts }) => {
  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "products"), {
        productName: productData.productName,
        description: productData.description,
        price: productData.price,
        image: productData.image,
      });
      console.log("Producto agregado con ID: ", docRef.id);
      setProductData({
        productName: "",
        description: "",
        price: "",
        image: "",
      });
      // Aquí se actualiza la lista de productos después de agregar uno nuevo
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
