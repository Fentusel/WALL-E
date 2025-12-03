import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBcm81VrhP5zv9VHDWgERtyneaLtPbo5EY",
    authDomain: "wall-e-df185.firebaseapp.com",
    projectId: "wall-e-df185",
    storageBucket: "wall-e-df185.firebasestorage.app",
    messagingSenderId: "297159712560",
    appId: "1:297159712560:web:5c7d6d491307ce37a8b2f5",
    measurementId: "G-BTFVM3893B"
};

const app = initializeApp( firebaseConfig );
export const auth = getAuth( app );