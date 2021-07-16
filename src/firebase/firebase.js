/* eslint-disable no-unused-vars */
import firebase from 'firebase';

const firebaseConfig = {

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