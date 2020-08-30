import firebase from 'firebase'


const firebaseConfig = {
    //write your firebase
    apiKey: "AIzaS******************U",
    authDomain: "whats-a*************app.com",
    databaseURL: "https:****************aseio.com",
    projectId: "wha**********ne-de45e",
    storageBucket: "wh*******************om",
    messagingSenderId: "23*****006",
    appId: "1:*****************b4331e7",
    measurementId: "************N1D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
