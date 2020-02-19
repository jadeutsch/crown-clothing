import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-f3U7DFCUVW4jkm2A2msjk6VmBb9NNR0",
    authDomain: "crown-db-7dd13.firebaseapp.com",
    databaseURL: "https://crown-db-7dd13.firebaseio.com",
    projectId: "crown-db-7dd13",
    storageBucket: "crown-db-7dd13.appspot.com",
    messagingSenderId: "523076300054",
    appId: "1:523076300054:web:69df8c55b664d360afb437",
    measurementId: "G-SHRCB8FL2T"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
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
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;