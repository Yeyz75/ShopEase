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
    image: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "image") {
      // Verificar si hay archivos seleccionados
      if (files.length > 0) {
        // Obtener la extensión del archivo
        const fileExtension = files[0].name.split(".").pop();
        // Verificar si la extensión es válida
        if (["jpg", "jpeg", "png"].includes(fileExtension.toLowerCase())) {
          // Actualizar el estado con el archivo seleccionado
          setProductData((prevState) => ({ ...prevState, [name]: files[0] }));
        } else {
          alert(
            "Por favor seleccione un archivo de imagen válido (jpg, jpeg, png)."
          );
        }
      }
    } else {
      setProductData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Subir imagen a Firebase Storage
      if (productData.image) {
        const storageRef = ref(getStorage());
        const imageRef = ref(storageRef, `images/${productData.image.name}`);
        const snapshot = await uploadBytes(imageRef, productData.image);
        const imageUrl = await getDownloadURL(snapshot.ref);

        // Agregar datos del producto a la base de datos
        const docRef = await addDoc(collection(db, "products"), {
          productName: productData.productName,
          description: productData.description,
          price: productData.price,
          image: imageUrl,
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
      } else {
        alert("Por favor seleccione una imagen para el producto.");
      }
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

      {/* Botón para seleccionar la imagen */}
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
