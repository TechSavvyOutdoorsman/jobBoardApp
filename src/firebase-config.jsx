// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRdJ1g9j93nX1TVVFY6Wazj7S998lQEB4",
  authDomain: "jobboard-dev-6bbfc.firebaseapp.com",
  projectId: "jobboard-dev-6bbfc",
  storageBucket: "jobboard-dev-6bbfc.appspot.com",
  messagingSenderId: "422035332592",
  appId: "1:422035332592:web:b00e1728147b73f29a1135",
  measurementId: "G-S5JNZ94K4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider() 

