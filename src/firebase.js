import { initializeApp } from "firebase/app";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseStudentConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase

const studentApp = initializeApp(firebaseStudentConfig, "student");

export const auth = getAuth(studentApp);
export const db = getFirestore(studentApp);
export const storage = getStorage(studentApp);

export const firestore_sendSignInLinkToEmail = sendSignInLinkToEmail;
export const firestore_isSignInWithEmailLink = isSignInWithEmailLink;
export const firestore_collection = collection;
export const firestore_setDoc = setDoc;
export const firestore_addDoc = addDoc;
export const firestore_doc = doc;
export const firestore_updateDoc = updateDoc;
export const firestore_arrayUnion = arrayUnion;
export const firestore_getDoc = getDoc;
export const firestore_getDocs = getDocs;
export const firestore_ref = ref;
export const firestore_uploadBytes = uploadBytes;
export const firestore_getDownloadURL = getDownloadURL;
