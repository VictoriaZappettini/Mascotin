// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwO1gldNzg4mOnv0DCu2_79f1SEh5m8vw",
  authDomain: "m4sc0tin.firebaseapp.com",
  projectId: "m4sc0tin",
  storageBucket: "m4sc0tin.appspot.com",
  messagingSenderId: "1045958897757",
  appId: "1:1045958897757:web:99b88847fa05022cd71db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;