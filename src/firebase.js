import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyApqrx-5VD2b_wsX4sHzQH-Jp4zxjuFgkU",
    authDomain: "whats-app-clone-de45e.firebaseapp.com",
    databaseURL: "https://whats-app-clone-de45e.firebaseio.com",
    projectId: "whats-app-clone-de45e",
    storageBucket: "whats-app-clone-de45e.appspot.com",
    messagingSenderId: "233857012006",
    appId: "1:233857012006:web:4458b2a6fe915f9b4331e7",
    measurementId: "G-7JWF5RHN1D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;