
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
const googeProvider = new firebase.auth.GithubAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(googeProvider);
};

export const signOut = () => {
    auth.signOut();
  };

export const firestore = firebase.firestore();

export const createOrGetUserProfileDocument = async (user)=> {
    if(!user) return;

    const userRef = firestore.doc(`user/${user.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const { displayName, email, photoURL } = user;
        try {
            const user = {
                display_name: displayName,
                email,
                photo_url: photoURL,
                created_at: new Date(user)
            };
            await userRef.set({

            });
        } catch(error) {
            console.log('Error',error);
        };
    }
    return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
    if (!uid) return null;
  
    try {
      const userDocument = await firestore.collection('users').doc(uid);
      return userDocument;
    } catch (error) {
      console.error('Error fetching user', error.message);
    }
  };