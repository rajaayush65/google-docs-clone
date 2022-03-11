import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIZ6o23Pt6339T_MOV7tLA5w3VEpHEGZE",
  authDomain: "docs-bdc10.firebaseapp.com",
  projectId: "docs-bdc10",
  storageBucket: "docs-bdc10.appspot.com",
  messagingSenderId: "967386764492",
  appId: "1:967386764492:web:22c066c5c89f1aec9e1e69"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
