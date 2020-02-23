import firebase from 'firebase';

var firebaseConfig = {
//config
  };

var fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();

export { db };
