// Importar las funciones y componentes de Firebase necesarios
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Inicializar la app de Firebase con la configuración previa
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore, Auth y Storage
const db = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);

// Exportar las funciones y componentes de Firebase que se usarán en otros archivos
export {
  // Firestore
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,

  // Auth
  auth,

  // Storage
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage,
  deleteObject,
};
