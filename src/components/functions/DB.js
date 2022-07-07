import { db } from "./../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./../../firebase-config";
// import { useState, useEffect } from "react";

const FetchFromFirebase = async (collectionName) => {
  const dataRef = collection(db, collectionName);

  const dataframe = await getDocs(dataRef);
  console.log("DB Fetch Done.");

  return dataframe.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
};

export default function readData(collectionName) {
  console.log("Read Data");
  return FetchFromFirebase(collectionName);
}
