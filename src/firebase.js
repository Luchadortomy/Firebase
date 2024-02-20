// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBazsG0A-JrZErDEsGGhS-q_VxKXJ5paCo",
  authDomain: "todo-app-yt-e13fe.firebaseapp.com",
  projectId: "todo-app-yt-e13fe",
  storageBucket: "todo-app-yt-e13fe.appspot.com",
  messagingSenderId: "183527233618",
  appId: "1:183527233618:web:9f204fd98fe98f5bc3278b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)