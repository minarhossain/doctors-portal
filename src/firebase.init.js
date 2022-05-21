// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbzlYr0jC5i5Lv_-T5_tcJyAv9LqFal8s",
    authDomain: "doctors-portal-91f6b.firebaseapp.com",
    projectId: "doctors-portal-91f6b",
    storageBucket: "doctors-portal-91f6b.appspot.com",
    messagingSenderId: "133475942064",
    appId: "1:133475942064:web:0e26f6501b4c7ce181c575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

