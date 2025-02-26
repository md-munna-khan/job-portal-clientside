// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyBzW_EG5vLXDtzFE9jv_ivggtjGcjOVU2o",
//   authDomain: "job-portal-eac19.firebaseapp.com",
//   projectId: "job-portal-eac19",
//   storageBucket: "job-portal-eac19.firebasestorage.app",
//   messagingSenderId: "83644770351",
//   appId: "1:83644770351:web:3b1dec4e6ce8bc29257eda"

apiKey: import.meta.env.VITE_apiKey,
authDomain: import.meta.env.VITE_authDomain,
projectId: import.meta.env.VITE_projectId,
storageBucket: import.meta.env.VITE_storageBucket,
messagingSenderId: import.meta.env.VITE_messagingSenderId,
appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);
 export default auth