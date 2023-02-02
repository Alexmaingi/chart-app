// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIZwA4ewC1FzHkUkijKoG72L73MKdoDcQ",
  authDomain: "chart-app-fb.firebaseapp.com",
  projectId: "chart-app-fb",
  storageBucket: "chart-app-fb.appspot.com",
  messagingSenderId: "1076527645201",
  appId: "1:1076527645201:web:f51f0a280d33ed292367b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
