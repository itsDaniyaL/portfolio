import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQKJsqzBslS3VMug6PzrQO1nNo4JKkg4U",
  authDomain: "portfolio-d9b8d.firebaseapp.com",
  projectId: "portfolio-d9b8d",
  storageBucket: "portfolio-d9b8d.firebasestorage.app",
  messagingSenderId: "817444770931",
  appId: "1:817444770931:web:5307d6c4c47e3e8d324606",
  measurementId: "G-QFYCC5L8JN",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
