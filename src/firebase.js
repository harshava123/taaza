// Firebase initialization for Tazza Chicken
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAfEPMI_VMM_fIQdF9Q4Y2xVljycIj46R0",
  authDomain: "tazza-b7bdb.firebaseapp.com",
  projectId: "tazza-b7bdb",
  storageBucket: "tazza-b7bdb.appspot.com",
  messagingSenderId: "916270635130",
  appId: "1:916270635130:web:f5bbf7b3ad4cdf0b5043c3",
  measurementId: "G-YNZJMSDV9D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage }; 