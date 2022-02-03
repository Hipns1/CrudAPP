// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI7wTwdLl4o6_hMBNxs65Gnng6uRYOqRQ",
  authDomain: "reactauthe.firebaseapp.com",
  projectId: "reactauthe",
  storageBucket: "reactauthe.appspot.com",
  messagingSenderId: "166700080028",
  appId: "1:166700080028:web:22aa642fb08798dd22c659"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;