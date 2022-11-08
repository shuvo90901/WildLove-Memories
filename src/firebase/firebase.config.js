// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqQ_YM7gVW27WXfXZ3OF4H6EL916rZNQQ",
    authDomain: "wildlove-memories.firebaseapp.com",
    projectId: "wildlove-memories",
    storageBucket: "wildlove-memories.appspot.com",
    messagingSenderId: "414504393549",
    appId: "1:414504393549:web:89dbe4505f189c42927504"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;