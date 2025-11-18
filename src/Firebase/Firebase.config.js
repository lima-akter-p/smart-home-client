// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHLAEpLXMA30t9boahaP2otcwpTCz3kI0",
  authDomain: "smart-home1-web-ed452.firebaseapp.com",
  projectId: "smart-home1-web-ed452",
  storageBucket: "smart-home1-web-ed452.firebasestorage.app",
  messagingSenderId: "540026325343",
  appId: "1:540026325343:web:bdf299b1521293243a8eea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
  export const auth = getAuth(app);