
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBU4lFKkeRGUuqEy6-P9VH_Phx1J8pSAbc",
    authDomain: "boredom-buster-a8c4f.firebaseapp.com",
    projectId: "boredom-buster-a8c4f",
    storageBucket: "boredom-buster-a8c4f.appspot.com",
    messagingSenderId: "125105299780",
    appId: "1:125105299780:web:b1c8a44bc070349429f711",
    measurementId: "G-7VDEH5FRGS"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);