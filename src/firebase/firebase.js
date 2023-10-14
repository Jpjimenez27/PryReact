import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDJ8moKvs_c27l3Iry5bOaOLFFLXWAWHHs",
  authDomain: "gymm-9114b.firebaseapp.com",
  projectId: "gymm-9114b",
  storageBucket: "gymm-9114b.appspot.com",
  messagingSenderId: "125962830426",
  appId: "1:125962830426:web:8f5d7f2cb5146d86f30e63"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);