import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCwN0i7J_Y0uQL4I5Gp3R4Omb6pd-TiQv4",
  authDomain: "look-up-love.firebaseapp.com",
  projectId: "look-up-love",
  storageBucket: "look-up-love.firebasestorage.app",
  messagingSenderId: "39604004264",
  appId: "1:39604004264:web:bd4c8c3d288b9484cee99d",
  measurementId: "G-P40XHMQ2V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
