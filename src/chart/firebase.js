// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAJ2t_uk34g2gqhWxVwyg3qpqHv7eZabE",
    authDomain: "projet-607d6.firebaseapp.com",
    projectId: "projet-607d6",
    storageBucket: "projet-607d6.appspot.com",
    messagingSenderId: "732746841390",
    appId: "1:732746841390:web:37e3ff37cc4bab47f08ebf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const productCollection = db.ref("data/compétences");
export default firebase;
