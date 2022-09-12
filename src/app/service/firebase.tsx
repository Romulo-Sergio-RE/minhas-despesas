import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);