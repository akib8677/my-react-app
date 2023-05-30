import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO-aS38tdNHQtlcu8RqNdbJtKRr_nb7yM",
  authDomain: "kfaqsfrp.firebaseapp.com",
  projectId: "kfaqsfrp",
  storageBucket: "kfaqsfrp.appspot.com",
  messagingSenderId: "515332196129",
  appId: "1:515332196129:web:937ca5e9f0f4d275186060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
