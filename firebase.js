import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAhny_QDqXDypmo90XbLZvFaTPDlsL57Bc",
    authDomain: "docs-clone-7c564.firebaseapp.com",
    projectId: "docs-clone-7c564",
    storageBucket: "docs-clone-7c564.appspot.com",
    messagingSenderId: "321430222364",
    appId: "1:321430222364:web:72973571bc4309a09291d9"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export { db };
 