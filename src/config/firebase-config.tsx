// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP80uh_tYYzEZkfRgxOS8qlAYP4eTgBks",
  authDomain: "shopma-70062.firebaseapp.com",
  projectId: "shopma-70062",
  storageBucket: "shopma-70062.firebasestorage.app",
  messagingSenderId: "88795707678",
  appId: "1:88795707678:web:fc79dde06ec8e4f89e310f",
  measurementId: "G-V5G9FWEM0F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);