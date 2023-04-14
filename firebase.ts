import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSFkZVDim0Aeh8lZu-sOEICkOYT-NzmiU",
  authDomain: "chatgpt-messenger-app-6332c.firebaseapp.com",
  projectId: "chatgpt-messenger-app-6332c",
  storageBucket: "chatgpt-messenger-app-6332c.appspot.com",
  messagingSenderId: "727032483422",
  appId: "1:727032483422:web:877151cf82328362e3eecf",
  measurementId: "G-0D6G4Q2T9V",
};

// Initialize Firebase before checking if any app instance is already present


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
