import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFw_q3CaIApO28M0UAShrQWxoNxIZGJ3c",
  authDomain: "flechazo-74d4f.firebaseapp.com",
  projectId: "flechazo-74d4f",
  storageBucket: "flechazo-74d4f.firebasestorage.app",
  messagingSenderId: "514781860372",
  appId: "1:514781860372:web:2d5b69f6641975ee658d01"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };