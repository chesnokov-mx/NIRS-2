// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWAt_KcmaBOn_qWZb2d5NtvpEOaPDFe88",
    authDomain: "merg-blog.firebaseapp.com",
    projectId: "merg-blog",
    storageBucket: "merg-blog.appspot.com",
    messagingSenderId: "1069273541300",
    appId: "1:1069273541300:web:dc975cd01735f3518305e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);