// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx3kThfuLG7IL9CSBE5QbDxzeVs7seCL8",
  authDomain: "gsaber-chat.firebaseapp.com",
  projectId: "gsaber-chat",
  storageBucket: "gsaber-chat.appspot.com",
  messagingSenderId: "475496594584",
  appId: "1:475496594584:web:c6f65c463f97f7af0ae4ed",
};

// Initialize Firebase Authentication and get a reference to the service
export const app = initializeApp(firebaseConfig);
//Call authentification function
export const auth = getAuth();
// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage();
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();
