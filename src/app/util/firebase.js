import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC41p8yDq6b3pzbC-FlnDEeFyE2-r-I1II",
  authDomain: "angular-todo-app-b5b21.firebaseapp.com",
  databaseURL: "https://angular-todo-app-b5b21-default-rtdb.firebaseio.com/",
  projectId: "angular-todo-app-b5b21",
  storageBucket: "angular-todo-app-b5b21.appspot.com",
  messagingSenderId: "140803522829",
  appId: "1:140803522829:web:47bc779411890a14eeb044",
  measurementId: "G-FBDWCS5CKK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
