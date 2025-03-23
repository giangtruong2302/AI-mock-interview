// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCVnJFWw-DoOl31549WrHCgRgbRtxgq1E",
  authDomain: "dynopreps.firebaseapp.com",
  projectId: "dynopreps",
  storageBucket: "dynopreps.firebasestorage.app",
  messagingSenderId: "127822880389",
  appId: "1:127822880389:web:bf382d9638456b373413ec",
  measurementId: "G-4GG5C9463G",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export default app;
