// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgY4Uo3bio2C38-mqP2M751Xj51-bC3T8",
    authDomain: "cake-app-7b096.firebaseapp.com",
    projectId: "cake-app-7b096",
    storageBucket: "cake-app-7b096.appspot.com",
    messagingSenderId: "381310801573",
    appId: "1:381310801573:web:5935a65d254ba3bb5e5f4c"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app, auth }
