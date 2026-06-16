// Import the functions you need from the SDKs you need
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_M1rTcvwDgRwivlBN6jrk4jUvcEjcgAo",
  authDomain: "it-hendelser-helse-stasjon.firebaseapp.com",
  projectId: "it-hendelser-helse-stasjon",
  storageBucket: "it-hendelser-helse-stasjon.firebasestorage.app",
  messagingSenderId: "10914276100",
  appId: "1:10914276100:web:8c2a3342b06b11248a2651"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);