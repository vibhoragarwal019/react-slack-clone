import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASkHK-9LDrB2Nby_740ewDZXw1OtE4PBA",
    authDomain: "react-slack-clone-ed4e0.firebaseapp.com",
    databaseURL: "https://react-slack-clone-ed4e0.firebaseio.com",
    projectId: "react-slack-clone-ed4e0",
    storageBucket: "react-slack-clone-ed4e0.appspot.com",
    messagingSenderId: "585122865203",
    appId: "1:585122865203:web:0af16099de0a3a6cd0c346"
};
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const signInWithGoogle = () => {
    const googeProvider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(googeProvider);
};