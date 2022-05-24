// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnuGtANDe4ikxr-gG0Nzo487DZC8vh1n0",
  authDomain: "kaizeninfracon-15b66.firebaseapp.com",
  projectId: "kaizeninfracon-15b66",
  storageBucket: "kaizeninfracon-15b66.appspot.com",
  messagingSenderId: "55431192200",
  appId: "1:55431192200:web:2f8127accb0c986201893d",
  measurementId: "G-BYXS2PW1QH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
