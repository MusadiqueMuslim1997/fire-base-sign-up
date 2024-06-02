

import { auth, createUserWithEmailAndPassword } from './firebase.js';

let register = () => {
    let signEmail = document.getElementById('signEmail');
    let signpassword = document.getElementById('signPassword');
    console.log(signEmail.value, signpassword.value);


    createUserWithEmailAndPassword(auth, signEmail.value, signpassword.value)
        .then((userCredential) => {
           
            const user = userCredential.user;
            swal({
                title: "Congratulation!",
                text: "Your account is created!",
                icon: "success",
                button: "Ok",
              });
            window.location.assign('index.html')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
         
         if(signEmail.value == '' || signpassword.value == ''){
            swal('Please Fill Input')
         }

         else{
            swal({
                title: "Error",
                text: "Try Again!",
                icon: "error",
                button: "Ok",
              });
         }
            
           
        });

}

let regBtn = document.getElementById('regBtn');

regBtn.addEventListener('click', register)

function createdlog(){
    window.location.assign('index.html')
}
let createlog = document.getElementById('createlog');
createlog.addEventListener('click', createdlog)

