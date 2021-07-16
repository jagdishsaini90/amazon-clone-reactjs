/* eslint-disable no-unused-vars */
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAN6dZ-R8Dyg_FpIkJwfC-kKd336GZbY2s",
  authDomain: "e-commerce-b9e60.firebaseapp.com",
  projectId: "e-commerce-b9e60",
  storageBucket: "e-commerce-b9e60.appspot.com",
  messagingSenderId: "805108618560",
  appId: "1:805108618560:web:a9686d5217445001c1d6a5"
};

let app;
if (firebase.apps.length === 0) {
     app = firebase.initializeApp(firebaseConfig);
} else {
     app = firebase.app();
}

const settings = {timestampsInSnapshots: true};
firebase.firestore().settings(settings);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const generateUserDocument = async (user) => {
     if (!user) return;
     const userRef = firestore.doc(`users/${user.uid}`);
     const snapshot = await userRef.get();
     if (!snapshot.exists) {
          const { email, displayName, photoURL, uid } = user;
          try {
               await userRef.set({
                    displayName,
                    email,
                    photoURL,
                    uid,
                    cart: [],
                    orders: [],
                    reviewList: [],
                    phone : null
               });
          } catch (error) {
               console.error("Error creating user document", error);
          }
     }
     return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
     if (!uid) return null;
     try {
          const userDocument = await firestore.doc(`users/${uid}`).get();
          return {
               uid,
               ...userDocument.data(),
          };
     } catch (error) {
          console.error("Error fetching user", error);
     }
};