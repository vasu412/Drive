// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6SZu8o0WZLnzyWZey2iOtsNHnG1rMzfI",
  authDomain: "drive-2-97043.firebaseapp.com",
  projectId: "drive-2-97043",
  storageBucket: "drive-2-97043.appspot.com",
  messagingSenderId: "843704899296",
  appId: "1:843704899296:web:687ef39d377805994ae285",
  measurementId: "G-XYPDPJC7NY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
