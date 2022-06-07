import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCmzWJiesVAlDBTLpv6hdUj1CIAjFxxNQk",
    authDomain: "fir-task-e1115.firebaseapp.com",
    projectId: "fir-task-e1115",
    storageBucket: "fir-task-e1115.appspot.com",
    messagingSenderId: "583511992198",
    appId: "1:583511992198:web:6b7387348c34501100ae07",
    measurementId: "G-PLJRW4LJ1Y"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);