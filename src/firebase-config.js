import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDnuGtANDe4ikxr-gG0Nzo487DZC8vh1n0",
  authDomain: "kaizeninfracon-15b66.firebaseapp.com",
  projectId: "kaizeninfracon-15b66",
  storageBucket: "kaizeninfracon-15b66.appspot.com",
  messagingSenderId: "55431192200",
  appId: "1:55431192200:web:2f8127accb0c986201893d",
  measurementId: "G-BYXS2PW1QH",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
