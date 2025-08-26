// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCsRjw6TenlZoXfLiHmVsmsQVT8ZXiLauM",
  authDomain: "fir-c566a.firebaseapp.com",
  projectId: "fir-c566a",
  storageBucket: "fir-c566a.firebasestorage.app",
  messagingSenderId: "543169616323",
  appId: "1:543169616323:web:6e54486913b85279afc576",
  measurementId: "G-B1LB0ZJG06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
 