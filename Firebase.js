import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDWRyRScFaKtUs4bTt95mUeIMXOAeulwCk",
    authDomain: "airbnb-clone-16bac.firebaseapp.com",
    projectId: "airbnb-clone-16bac",
    storageBucket: "airbnb-clone-16bac.appspot.com",
    messagingSenderId: "437752086410",
    appId: "1:437752086410:web:2a103ee11b4143d5bc9273",
    measurementId: "G-X92DHG68SL"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref();

export { auth, provider, storage };
export default db;