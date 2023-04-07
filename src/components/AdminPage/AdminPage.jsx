// Importamos los módulos necesarios de la biblioteca Firebase y los componentes necesarios
import React, { useState, useEffect } from "react";
import {
  db,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDownloadURL,
  getStorage,
  ref,
  deleteObject,
} from "../../services/firebase";
import "./AdminPage.css";
import ProductTable from "../ProductTable/index";
import AddProductForm from "../AddProductForm/index";

const AdminPage = () => {
  // Definimos el estado inicial del componente
  const [products, setProducts] = useState([]);

  // Utilizamos el hook useEffect para recuperar los datos de productos de Firebase y actualizar el estado de productos
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

  // Manejador de cambios en los campos de producto
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

  // Manejador de eliminación de productos
  const handleProductDelete = async (productId, image) => {
    const confirmed = window.confirm(
      "¿Está seguro de que desea eliminar este producto?"
    );
    console.log(image);
    if (confirmed) {
      const filteredProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(filteredProducts);
      try {
        await deleteDoc(doc(db, "products", productId));
        console.log("Producto eliminado con ID: ", productId);

        // Obtenemos la referencia al Firebase Storage
        const storage = getStorage();

        // Obtenemos el nombre del archivo de la URL de imagen
        const fileName = image.split("/").pop();

        // Obtenemos la referencia al archivo de imagen asociado al producto
        const imageRef = ref(storage, fileName);

        try {
          // Verificamos si el objeto existe en Firebase Storage
          await getDownloadURL(imageRef);

          // Si el objeto existe, lo eliminamos
          await deleteObject(imageRef);
          console.log("Imagen eliminada con URL: ", image);
        } catch (error) {
          if (error.code === "storage/object-not-found") {
            console.log("El objeto no existe en Firebase Storage");
          } else {
            console.log("Error eliminando imagen: ", error);
          }
        }
      } catch (error) {
        console.log("Error eliminando producto: ", error);
      }
    }
  };

  // Renderizamos el formulario de agregar producto y la tabla de productos
  return (
    <div className="container">
      <AddProductForm setProducts={setProducts} />
      <ProductTable
        products={products}
        handleProductChange={handleProductChange}
        handleProductDelete={handleProductDelete}
      />
    </div>
  );
};

// Exportamos el componente AdminPage
export default AdminPage;
