import { auth, onAuthStateChanged, signOut, sendEmailVerification, sendPasswordResetEmail } from './firebase.js';


onAuthStateChanged(auth, (user) => {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    email.innerHTML = user.email
    email.style.color = 'green'
    if (user.emailVerified == false) {
        password.innerHTML = 'Not Verify'
        password.style.color = 'red';
    }
    else {
        password.innerHTML = 'Your email has been verified'
        password.style.color = 'darkgreen';
    }

    if (user) {
        console.log(user);


    } else {
        swal('Not Found')
    }
});

function logout() {

    signOut(auth).then(() => {
        window.location.assign('index.html')
    }).catch((error) => {
        swal('Something is wrong')
    });
}
let logot = document.getElementById('logout')
logot.addEventListener('click', logout)


function verification() {
    sendEmailVerification(auth.currentUser)
        .then(() => {
            swal('Email verification link has been successfully sent')
        });
}

let sendkey = document.getElementById('send')
sendkey.addEventListener('click', verification)


function reset() {

    let user = auth.currentUser
    sendPasswordResetEmail(auth, user.email)
        .then(() => {
            swal('Your Reset Password Email Link has been successfully Sent')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

}

let resetPass = document.getElementById('resetPass');
resetPass.addEventListener('click', reset)