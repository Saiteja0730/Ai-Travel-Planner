import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3cK31qYG8ZZKqd-lcXeUOT6WB2shX2JQ",
  authDomain: "mytravellogin-4bbe4.firebaseapp.com",
  projectId: "mytravellogin-4bbe4",
  storageBucket: "mytravellogin-4bbe4.firebasestorage.app",
  messagingSenderId: "295521071975",
  appId: "1:295521071975:web:fe6830a6c2d21aa94175c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default {app,db};