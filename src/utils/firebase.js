// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwyPiKUwpEVWynTqdsKSqfy9QlZYeTGUg",
  authDomain: "sansnetflixgpt.firebaseapp.com",
  projectId: "sansnetflixgpt",
  storageBucket: "sansnetflixgpt.firebasestorage.app",
  messagingSenderId: "163564395404",
  appId: "1:163564395404:web:3ca10d17bc0f7916c214a9",
  measurementId: "G-0X92C2RN47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
