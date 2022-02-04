// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLffJ_eoeNPue72GPLGZnpnqEBucOQaB0",
  authDomain: "mobilus-website.firebaseapp.com",
  projectId: "mobilus-website",
  storageBucket: "mobilus-website.appspot.com",
  messagingSenderId: "314535050931",
  appId: "1:314535050931:web:1ec32148289b8e02ddfac6",
  measurementId: "G-Y1XV8GCRQY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
