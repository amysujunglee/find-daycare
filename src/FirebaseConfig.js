import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB-Y2zczwV6ckDMn5Qx3J4j7aCEy1Fip18",
    authDomain: "find-daycare.firebaseapp.com",
    databaseURL: "https://find-daycare-default-rtdb.firebaseio.com",
    projectId: "find-daycare",
    storageBucket: "find-daycare.appspot.com",
    messagingSenderId: "478412090999",
    appId: "1:478412090999:web:a8731f000e5c2a2cf2e072"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)