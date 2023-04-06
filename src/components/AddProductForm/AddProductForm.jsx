import React, { useState } from "react";
import {
  db,
  collection,
  addDoc,
  getDocs,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../../services/firebase";

const AddProductForm = ({ products, setProducts }) => {
  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    price: "",
    image: null, // cambiar a null en lugar de una cadena vacía
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target; // añadir files
    if (name === "image") {
      // manejar archivos de imagen
      setProductData((prevState) => ({ ...prevState, [name]: files[0] }));
    } else {
      setProductData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Subir imagen a Firebase Storage
      const storageRef = ref(getStorage());
      const imageRef = ref(storageRef, `images/${productData.image.name}`);
      const snapshot = await uploadBytes(imageRef, productData.image);
      const imageUrl = await getDownloadURL(snapshot.ref);

      // Agregar datos del producto a la base de datos
      const docRef = await addDoc(collection(db, "products"), {
        productName: productData.productName,
        description: productData.description,
        price: productData.price,
        image: imageUrl, // almacenar la URL de la imagen cargada en la base de datos
      });
      console.log("Producto agregado con ID: ", docRef.id);

      // Limpiar campos del formulario
      setProductData({
        productName: "",
        description: "",
        price: "",
        image: null,
      });

      // Actualizar la lista de productos que se muestra en la aplicación
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

      <label htmlFor="image">
        Imagen:
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <span>
          {productData.image ? productData.image.name : "Seleccionar imagen"}
        </span>
      </label>

      {/* Agregar un botón para seleccionar la imagen */}
      <button
        type="button"
        onClick={() => document.getElementById("image").click()}
      >
        Seleccionar imagen
      </button>

      <button type="submit">Agregar producto</button>
    </form>
  );
};

export default AddProductForm;
