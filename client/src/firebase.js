// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-c8dbf.firebaseapp.com",
  projectId: "mern-state-c8dbf",
  storageBucket: "mern-state-c8dbf.appspot.com",
  messagingSenderId: "622290678742",
  appId: "1:622290678742:web:1d2577f51fae4ad68f6a77",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
