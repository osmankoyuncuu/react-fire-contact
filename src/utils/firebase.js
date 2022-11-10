// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "./ToastNotify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const contactRef = collection(db, "contact");

export const useContactListener = (setContactList) => {
  useEffect(() => {
    onSnapshot(contactRef, (snapshot) => {
      setContactList(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      //console.log(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
};

export const editContact = ({ id, name, phone, gender }, setEdit) => {
  try {
    const docRef = doc(db, "contact", id);
    updateDoc(docRef, { name, phone, gender });
    setEdit(false);
    toastSuccessNotify("Updated Successfully!");
  } catch (error) {
    toastWarnNotify(error.message);
  }
};

export const deleteContact = (id) => {
  try {
    deleteDoc(doc(db, "contact", id));
    toastErrorNotify("Deleted Successfully");
  } catch (error) {
    toastWarnNotify(error.message);
  }
};

export const addContactItem = (addContact) => {
  try {
    addDoc(contactRef, { ...addContact });
    toastSuccessNotify("Added Successfully!");
    console.log("çalıştı");
  } catch (error) {
    toastWarnNotify(error.message);
  }
};
