// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm99-rQbOezi0iYixp70W86hTI3OI7IJU",
  authDomain: "greenrun-test.firebaseapp.com",
  projectId: "greenrun-test",
  storageBucket: "greenrun-test.appspot.com",
  messagingSenderId: "731036927760",
  appId: "1:731036927760:web:984b70bc8dcdf4fa0c4795",
  measurementId: "G-8WNXQV0DW9",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
