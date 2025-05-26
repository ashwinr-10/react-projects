// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWF4LxXlVK80vs9aGyIxbSg1fF0nncGaQ",
  authDomain: "vite-contact-5ad7f.firebaseapp.com",
  projectId: "vite-contact-5ad7f",
  storageBucket: "vite-contact-5ad7f.firebasestorage.app",
  messagingSenderId: "884910415744",
  appId: "1:884910415744:web:076d16ce51fc6c5e40eb65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);