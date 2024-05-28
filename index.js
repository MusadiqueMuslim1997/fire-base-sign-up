

import { auth, createUserWithEmailAndPassword } from './firebase.js';

let register = () => {
    let signEmail = document.getElementById('signEmail');
    let signpassword = document.getElementById('signPassword');
    console.log(signEmail.value, signpassword.value);


    createUserWithEmailAndPassword(auth, signEmail.value, signpassword.value)
        .then((userCredential) => {

            const user = userCredential.user;
            window.location.assign('login.html')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            swal('error')
        });

}

let regBtn = document.getElementById('regBtn');

regBtn.addEventListener('click', register)


