// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIINmWn28pf2OHt3m5KoSd9j9DPYMbAEQ",
  authDomain: "pin-clone28.firebaseapp.com",
  projectId: "pin-clone28",
  storageBucket: "pin-clone28.appspot.com",
  messagingSenderId: "882162199589",
  appId: "1:882162199589:web:81f31a61a357d6ce8663cc",
  measurementId: "G-8QXPHW5X3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app