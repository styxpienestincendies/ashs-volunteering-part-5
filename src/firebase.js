// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgsAAMN1xNwu9SA_AzRHZ93WKbeNwhuOw",
    authDomain: "contact-form-918fd.firebaseapp.com",
    projectId: "contact-form-918fd",
    storageBucket: "contact-form-918fd.appspot.com",
    messagingSenderId: "941606051963",
    appId: "1:941606051963:web:16862b7f67e1e0909302de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }