// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtmkxWX_niQcnYSjKWrbQKY7s4arbwkwA",
  authDomain: "pizza-988d2.firebaseapp.com",
  projectId: "pizza-988d2",
  storageBucket: "pizza-988d2.appspot.com",
  messagingSenderId: "256352126358",
  appId: "1:256352126358:web:d9f02d1236fd0ddcadc9b7",
  measurementId: "G-NYW36F8T3G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const storage = getStorage(app);
