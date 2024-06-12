// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXjtgdBY54_EFEHBUSibWNHJ2BeTJInfw",
  authDomain: "g-v-drive.firebaseapp.com",
  projectId: "g-v-drive",
  storageBucket: "g-v-drive.appspot.com",
  messagingSenderId: "507238811488",
  appId: "1:507238811488:web:d0d08cb1c4222f74c1c005",
  measurementId: "G-BG9VV2M7C8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
