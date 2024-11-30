// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCP8w36PPptFrHtN28udjrok-DBS7hRsCk",
  authDomain: "crud-node-mongo.firebaseapp.com",
  projectId: "crud-node-mongo",
  storageBucket: "crud-node-mongo.firebasestorage.app",
  messagingSenderId: "215372244326",
  appId: "1:215372244326:web:2a3e21c5ced4153d3754a7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
