import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAQ4v5yNtDavDf9R1iun95fw76lBM7wmw8",
  authDomain: "supplement-store-c68a2.firebaseapp.com",
  projectId: "supplement-store-c68a2",
  storageBucket: "supplement-store-c68a2.appspot.com",
  // gs://supplement-store-c68a2.appspot.com
  messagingSenderId: "954928525287",
  appId: "1:954928525287:web:cdb2a46a25c4f2b0e45742",
  measurementId: "G-BVM6DBK7N2",
  databaseURL: "https://supplement-store-c68a2-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app);
export const storage = getStorage(app);