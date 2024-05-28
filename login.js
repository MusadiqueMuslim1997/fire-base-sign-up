
import { auth, signInWithEmailAndPassword} from './firebase.js';


let log = () => {
let logEmail = document.getElementById('logEmail');
let logPassword = document.getElementById('logPassword');

signInWithEmailAndPassword(auth, logEmail.value, logPassword.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    window.location.assign('profile.html')

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    swal('Invalid Candidiate')
  });
}

let login = document.getElementById('login');
login.addEventListener('click', log)
