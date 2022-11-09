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

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2FyA0kLDTDcUKNKioUJ16lVbyut2j2oM",
  authDomain: "fire-contact-e18b6.firebaseapp.com",
  projectId: "fire-contact-e18b6",
  storageBucket: "fire-contact-e18b6.appspot.com",
  messagingSenderId: "197717999232",
  appId: "1:197717999232:web:323327804d179542827065",
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

export const editContact = ({ id, name, phone, gender }, setAddContact) => {
  const docRef = doc(db, "contact", id);
  updateDoc(docRef, { name, phone, gender });
};

export const deleteContact = (id) => {
  deleteDoc(doc(db, "contact", id));
};

export const addContactItem = (addContact) => {
  addDoc(contactRef, { ...addContact });
};
