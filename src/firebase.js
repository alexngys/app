// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfBrAa9gGpvL6stfnKwPZky5hVunIxtG4",
  authDomain: "docks-app.firebaseapp.com",
  projectId: "docks-app",
  storageBucket: "docks-app.appspot.com",
  messagingSenderId: "1044738534009",
  appId: "1:1044738534009:web:dec643ac029b4cb05902a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)