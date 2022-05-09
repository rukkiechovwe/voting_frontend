import { initializeApp } from "firebase/app";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
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
  apiKey: "AIzaSyD6rQi-CBqaO2Ox6SJ_DbyRtnoZkStza3Y",
  authDomain: "voting-app-d2306.firebaseapp.com",
  projectId: "voting-app-d2306",
  storageBucket: "voting-app-d2306.appspot.com",
  messagingSenderId: "781492838264",
  appId: "1:781492838264:web:074826dd5dca4287d2b28d",
};

// Initialize Firebase

const studentApp = initializeApp(firebaseStudentConfig, "student");

export const auth = getAuth(studentApp);
export const db = getFirestore(studentApp);
export const storage = getStorage(studentApp);

export const firestore_sendSignInLinkToEmail = sendSignInLinkToEmail;
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
