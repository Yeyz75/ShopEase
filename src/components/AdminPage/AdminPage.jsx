import React, { useState, useEffect } from "react";
import {
  db,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "../../services/firebase";
import "./AdminPage.css";
import AddProductForm from "../AddProductForm/index";
import ProductList from "../ProductTable/index";

const AdminPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = collection(db, "products");
    getDocs(productsRef)
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const handleProductChange = async (event, productId, fieldName) => {
    const value = event.target.value;
    const productIndex = products.findIndex(
      (product) => product.id === productId
    );
    const updatedProduct = { ...products[productIndex], [fieldName]: value };
    const updatedProducts = [...products];
    updatedProducts[productIndex] = updatedProduct;
    setProducts(updatedProducts);
    try {
      await updateDoc(doc(db, "products", productId), updatedProduct);
      console.log("Producto actualizado con ID: ", productId);
    } catch (error) {
      console.log("Error actualizando producto: ", error);
    }
  };

  const handleProductDelete = async (productId) => {
    const confirmed = window.confirm(
      "¿Está seguro de que desea eliminar este producto?"
    );
    if (confirmed) {
      const filteredProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(filteredProducts);
      try {
        await deleteDoc(doc(db, "products", productId));
        console.log("Producto eliminado con ID: ", productId);
      } catch (error) {
        console.log("Error eliminando producto: ", error);
      }
    }
  };

  return (
    <div className="container">
      <AddProductForm setProducts={setProducts} />

      <ProductList
        products={products}
        handleProductChange={handleProductChange}
        handleProductDelete={handleProductDelete}
      />
    </div>
  );
};

export default AdminPage;
