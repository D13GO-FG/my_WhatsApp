import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAGewEFaoaXw_5nGECDTG2D53gvQ0dkXrc",
  authDomain: "whatsapp-clone-39f4e.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-39f4e.firebaseio.com",
  projectId: "whatsapp-clone-39f4e",
  storageBucket: "whatsapp-clone-39f4e.appspot.com",
  messagingSenderId: "934064478064",
  appId: "1:934064478064:web:3dc2e14e6588196fa021b5",
  measurementId: "G-562H459GD5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
