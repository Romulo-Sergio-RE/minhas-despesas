import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD7E-PxP1JOd-VKBq5U2xRRror4xcLFopo",
    authDomain: "primeriocrudreact.firebaseapp.com",
    databaseURL: "https://primeriocrudreact-default-rtdb.firebaseio.com",
    projectId: "primeriocrudreact",
    storageBucket: "primeriocrudreact.appspot.com",
    messagingSenderId: "473328973090",
    appId: "1:473328973090:web:b66d82ac4ec5bc2b9c617b",
    measurementId: "G-MZ4F8QZ6LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);