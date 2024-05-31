import { auth, onAuthStateChanged, signOut, sendEmailVerification } from './firebase.js';


onAuthStateChanged(auth, (user) => {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    email.innerHTML = user.email
    if (user.emailVerified == false) {
        password.innerHTML = 'Not Verify'
    }
    else{
        password.innerHTML = 'Your email is verified'
    }

    if (user) {
        console.log(user);


    } else {
        swal('Not Found')
    }
});

function logout(){
   
    signOut(auth).then(() => {
    window.location.assign('index.html')
    }).catch((error) => {
      swal('Something is wrong')
    });
}
let logot = document.getElementById('logout')
logot.addEventListener('click', logout)


function verification(){
    sendEmailVerification(auth.currentUser)
  .then(() => {
    swal('Email verification link is sent')
  });
}

let sendkey = document.getElementById('send')
sendkey.addEventListener('click', verification)