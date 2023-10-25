// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQViM4UAJ07RoqeCic0UpmGYpdgchHEBM",
  authDomain: "fashion-apparel-clint.firebaseapp.com",
  projectId: "fashion-apparel-clint",
  storageBucket: "fashion-apparel-clint.appspot.com",
  messagingSenderId: "130607664305",
  appId: "1:130607664305:web:e84ba2cdbdb0f3e1826690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;