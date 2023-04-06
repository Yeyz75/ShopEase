import React, { useState, useEffect } from "react";
import {
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "../../services/firebase";

const AdminPage = () => {
  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    price: "",
    image: "",
  });
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
    } catch (error) {
      console.log("Error agregando producto: ", error);
    }
  };

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
    <div>
      <h1>Administrando...</h1>
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

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <input
                  type="text"
                  value={product.productName}
                  onChange={(e) =>
                    handleProductChange(e, product.id, "productName")
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={product.description}
                  onChange={(e) =>
                    handleProductChange(e, product.id, "description")
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) => handleProductChange(e, product.id, "price")}
                />
              </td>
              <td>
                <button onClick={() => handleProductDelete(product.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminPage;
