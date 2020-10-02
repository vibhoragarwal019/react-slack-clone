
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

export const createOrGetUserProfileDocument = async (user, additionalData) => {
    if (!user) return;
  
    // check if a the user doc is there in DB with
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
  
    // if no user exists in DB @ path 'userRef' then go and make one
    if (!snapshot.exists) {
      const { displayName, email, photoURL } = user;
  
      const createdAt = new Date();
  
      try {
        await userRef.set({
          display_name: displayName || additionalData.displayName,
          email,
          photo_url: photoURL
            ? photoURL
            : 'https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72',
          created_at: createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.error('Error creating user', error.message);
      }
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