import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRJSV0nw7_NTKnxZDoqzq1DvdPcJEBXEQ",
    authDomain: "instagram-clone-1619c.firebaseapp.com",
    databaseURL: "https://instagram-clone-1619c.firebaseio.com",
    projectId: "instagram-clone-1619c",
    storageBucket: "instagram-clone-1619c.appspot.com",
    messagingSenderId: "1011954856348",
    appId: "1:1011954856348:web:28db72c083b83f2739d859",
    measurementId: "G-157EPFM5S9"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };