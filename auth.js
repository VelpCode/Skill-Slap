import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeYkzCYfBVv24haaqILzFexmFU6l-Gmt4",
  authDomain: "skillslap-640dc.firebaseapp.com",
  projectId: "skillslap-640dc",
  storageBucket: "skillslap-640dc.appspot.com",
  messagingSenderId: "1095919272633",
  appId: "1:1095919272633:web:ab0b0e4d5b9ea2a8215168",
  measurementId: "G-ZS84R5RBQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;