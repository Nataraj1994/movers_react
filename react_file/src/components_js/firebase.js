
import  firebase  from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxFDnu6eESe3c4v7bZXaANGQq7zfaP-MQ",
  authDomain: "react-datastore.firebaseapp.com",
  projectId: "react-datastore",
  storageBucket: "react-datastore.appspot.com",
  messagingSenderId: "942757663001",
  appId: "1:942757663001:web:688c371f5ed9fadee33588",
  measurementId: "G-G8MT222CEN"
};
// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db =app.firestore();
export   {db};
export   {auth};



