// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBSE_API_KEY,
  authDomain: "home-harbor.firebaseapp.com",
  projectId: "home-harbor",
  storageBucket: "home-harbor.appspot.com",
  messagingSenderId: "763723347097",
  appId: "1:763723347097:web:5f8aa87e5a273870127408"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);