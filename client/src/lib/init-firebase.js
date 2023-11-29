// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQF0aSt52dw5UuLW43Xs-0Mo_jbYG8DVs",
  authDomain: "testproject-4e7a7.firebaseapp.com",
  databaseURL: "https://testproject-4e7a7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testproject-4e7a7",
  storageBucket: "testproject-4e7a7.appspot.com",
  messagingSenderId: "570848725876",
  appId: "1:570848725876:web:5c1e597a765e75a1e7fa21",
  measurementId: "G-XM1K3TFS8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
