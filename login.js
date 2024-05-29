
import { auth, signInWithEmailAndPassword } from './firebase.js';


let log = () => {
    let logEmail = document.getElementById('logEmail');
    let logPassword = document.getElementById('logPassword');

    signInWithEmailAndPassword(auth, logEmail.value, logPassword.value)
        .then((userCredential) => {

            const user = userCredential.user;
            swal({
                title: "Congratulation!",
                text: "Your account is created!",
                icon: "success",
                button: "Ok",
              });
            window.location.assign('profile.html')

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            swal({
                title: "Error",
                text: "Invalid Candidiate!",
                icon: "error",
                button: "Ok",
              });
        });
}

let login = document.getElementById('login');
login.addEventListener('click', log)
