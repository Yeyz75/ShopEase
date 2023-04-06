import "./AdminPage.css";
import { db, collection, getDocs } from "../../services/firebase";

const AdminPage = () => {
  const productsRef = collection(db, "products");
  getDocs(productsRef)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

  return (
    <div>
      <h1>Administrando...</h1>
      {/* Agregar componentes e interfaz de usuario para manejar productos */}
    </div>
  );
};

export default AdminPage;
