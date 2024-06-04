// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANUQaF1MA0TSddhgQ3UA0ITTu9TEACcQ4",
    authDomain: "login-auth-fde85.firebaseapp.com",
    projectId: "login-auth-fde85",
    storageBucket: "login-auth-fde85.appspot.com",
    messagingSenderId: "764101416918",
    appId: "1:764101416918:web:264fcc851f3336ef2b3677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)
export const storage = getStorage(app);
export default app;


