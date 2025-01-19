// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhAPvSPqu3P6oA6E7RS2-oH94yl22cQZY",
  authDomain: "cut-accommodation-app.firebaseapp.com",
  databaseURL: "https://cut-accommodation-app-default-rtdb.firebaseio.com",
  projectId: "cut-accommodation-app",
  storageBucket: "cut-accommodation-app.appspot.com",
  messagingSenderId: "557977339505",
  appId: "1:557977339505:web:971b19b9c0eba2e90f3dd0",
  measurementId: "G-96148X4ERM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);