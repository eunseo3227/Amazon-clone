import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyB15tnB6Am81bl-vr_T8J4DfIO-Gn97wmg",
    authDomain: "clone-f212d.firebaseapp.com",
    projectId: "clone-f212d",
    storageBucket: "clone-f212d.appspot.com",
    messagingSenderId: "224801985621",
    appId: "1:224801985621:web:9751b87274200756fef0dc",
    measurementId: "G-T3JKYSXJCE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };