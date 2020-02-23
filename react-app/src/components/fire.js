import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC-7Gusp5w9sCfPYXRR4OL2kvGMkeiXLss",
    authDomain: "studentportal-hackstudio.firebaseapp.com",
    databaseURL: "https://studentportal-hackstudio.firebaseio.com",
    projectId: "studentportal-hackstudio",
    storageBucket: "studentportal-hackstudio.appspot.com",
    messagingSenderId: "272037909926",
    appId: "1:272037909926:web:f4d93e8e7cc70b9e6feb67",
    measurementId: "G-CGH6YPBZC1"
  };

var fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();

export { db };