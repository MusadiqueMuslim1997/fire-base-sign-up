
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js';

// import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCHP8UI243_4d47HJoC8eMV4L4pTqdv028",
    authDomain: "sign-up-and-log-in-form.firebaseapp.com",
    projectId: "sign-up-and-log-in-form",
    storageBucket: "sign-up-and-log-in-form.appspot.com",
    messagingSenderId: "860943648564",
    appId: "1:860943648564:web:139cbd4cd1883b92038761"
  };
  
 
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  }

