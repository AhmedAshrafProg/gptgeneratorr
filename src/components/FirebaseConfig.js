import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoz_SvW5EicHn8N1TwkHkUNQCN1mOhBDg",
  authDomain: "gptgenerator-4a5e6.firebaseapp.com",
  projectId: "gptgenerator-4a5e6",
  storageBucket: "gptgenerator-4a5e6.appspot.com",
  messagingSenderId: "1076175710757",
  appId: "1:1076175710757:web:e8b6112a4c1b486457edcc",
  measurementId: "G-PXC26X30EE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

