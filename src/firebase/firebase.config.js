// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMfHAwCUP8RtU_9UO4qC_8qDmT6mITjCE",
  authDomain: "the-news-dragon-41e3b.firebaseapp.com",
  projectId: "the-news-dragon-41e3b",
  storageBucket: "the-news-dragon-41e3b.appspot.com",
  messagingSenderId: "812840884143",
  appId: "1:812840884143:web:2358d65a25f391eef7815a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;