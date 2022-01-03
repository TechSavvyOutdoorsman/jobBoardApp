// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBIyxrwJnG6JzKog5gMLDZm7TMgvkoI0o",
  authDomain: "jobboarddev-3.firebaseapp.com",
  projectId: "jobboarddev-3",
  storageBucket: "jobboarddev-3.appspot.com",
  messagingSenderId: "701510361339",
  appId: "1:701510361339:web:649bb41030d402a94e105e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider() 

