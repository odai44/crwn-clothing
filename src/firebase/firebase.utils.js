import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCi5Ogb1bkEt0bla3EoifjFz3qTqwAiL_w",
    authDomain: "crwn-db-ee147.firebaseapp.com",
    databaseURL: "https://crwn-db-ee147.firebaseio.com",
    projectId: "crwn-db-ee147",
    storageBucket: "crwn-db-ee147.appspot.com",
    messagingSenderId: "967829731131",
    appId: "1:967829731131:web:7f2f24d225aa5e2759291e",
    measurementId: "G-KYPDDJMXMY"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


    if(!snapShot.exists){

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            })
        } catch (error) {

            console.log('error creating user', error.message);

        }

    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;