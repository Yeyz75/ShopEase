import { useState, useEffect } from "react";
import "./Products.css";
import {
  db,
  collection,
  getDocs,
  ref,
  storage,
  getDownloadURL,
} from "../../services/firebase";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // Obtener la colección de productos de Firestore
      const productsCollection = collection(db, "products");

      // Obtener los documentos de la colección
      const snapshot = await getDocs(productsCollection);

      // Convertir los documentos a un arreglo de objetos
      const productsArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Obtener la URL de descarga de la imagen para cada producto
      const productsWithUrls = await Promise.all(
        productsArray.map(async (product) => {
          const imageRef = ref(storage, product.image);
          const imageUrl = await getDownloadURL(imageRef);
          return { ...product, imageUrl };
        })
      );

      // Actualizar el estado con los productos y sus URLs de descarga de imagen
      setProducts(productsWithUrls);
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      <div className="header">
        <h1>Bienvenidos a ShopEase</h1>
        <p>
          Aquí se muestran todos los productos disponibles en nuestra tienda
          online:
        </p>
      </div>
      <div className="product-wrapper">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.productName}</h2>
            <img src={product.imageUrl} alt={product.nombre} />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
