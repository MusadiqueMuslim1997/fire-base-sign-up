

import { auth, createUserWithEmailAndPassword } from './firebase.js';

let register = () => {
    let signEmail = document.getElementById('signEmail');
    let signpassword = document.getElementById('signPassword');
    console.log(signEmail.value, signpassword.value);


    createUserWithEmailAndPassword(auth, signEmail.value, signpassword.value)
        .then((userCredential) => {
            swal({
                title: "Congratulation!",
                text: "Your account is created!",
                icon: "success",
                button: "Ok",
              });
            const user = userCredential.user;
            window.location.assign('login.html')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            swal({
                title: "Error",
                text: "Try Again!",
                icon: "error",
                button: "Ok",
              });
        });

}

let regBtn = document.getElementById('regBtn');

regBtn.addEventListener('click', register)


