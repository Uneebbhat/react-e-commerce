import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBF01018HYhoaMsA-ywzwa84rqFqh16zGc",
  authDomain: "ecommercestore-1.firebaseapp.com",
  projectId: "ecommercestore-1",
  storageBucket: "ecommercestore-1.appspot.com",
  messagingSenderId: "813172780268",
  appId: "1:813172780268:web:2fbd0d1f0ae6e37e1f49c9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
