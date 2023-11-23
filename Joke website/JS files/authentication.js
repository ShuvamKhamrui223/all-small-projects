// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";

import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsDGKNbMR7XHW1KUDgagwxDtyZgNLln5E",

  authDomain: "js-jokes-app.firebaseapp.com",

  projectId: "js-jokes-app",

  storageBucket: "js-jokes-app.appspot.com",

  messagingSenderId: "493099854679",

  appId: "1:493099854679:web:d6883f5fa9695cb3cd2c12"
};

const jokeApp = initializeApp(firebaseConfig);

const database = getDatabase(jokeApp);

const auth = getAuth();

const signUpBtn = document.getElementById('signUpBtn');

const Email = document.getElementById('Email');

const username = document.getElementById('username');

const Password = document.getElementById('Password');

const myForm = document.getElementById('myForm');

let errMsg = document.querySelector('.err_msg');

let err_Msg_username = document.getElementById('err_msg_username');

let err_Msg_email = document.getElementById('err_msg_email');

let err_Msg_password = document.getElementById('err_msg_password');

let form_heading = document.querySelector('h1');

const goToLogInPage = document.getElementById('goToLogInPage');

signUpBtn.addEventListener('click', function(e) {

  // validate the username field
  if (username.value == '') {
    e.preventDefault();
    err_Msg_username.innerHTML = "please enter your username";
    username.classList.add('InValid');
    username.focus();
  } else {
    username.classList.remove('InValid');
    err_Msg_username.innerHTML = '';
  }
  var username_val;
  username.addEventListener('keyup', function(e) {
    if (username.value.length < 3 || username.value.length > 24) {
      e.preventDefault();
      err_Msg_username.innerHTML = "username must have 3 to 25 characters only";
      username.classList.add('InValid');
    } else {
      username.classList.remove('InValid');
      err_Msg_username.innerHTML = '';

    }

  });

  var email_val;
  if (Email.value == '') {
    e.preventDefault();
    err_Msg_email.innerHTML = "please enter your email address";
    Email.classList.add('InValid');
    Email.focus();
  } else {
    Email.classList.remove('InValid');
    err_Msg_email.innerHTML = '';
  }

  Email.addEventListener('keyup', function(e) {
    if (Email.value.length < 13) {
      e.preventDefault();
      err_Msg_email.innerHTML = "Email is too short";
      Email.classList.add('InValid');
    } else {
      Email.classList.remove('InValid');
      err_Msg_email.innerHTML = '';
    }
  });

  var password_val;
  if (Password.value == '') {
    e.preventDefault();
    err_Msg_password.innerHTML = "please enter password";
    Password.classList.add('InValid');
    Password.focus();
  } else {
    Password.classList.remove('InValid');
    err_Msg_password.innerHTML = '';
  }

  Password.addEventListener('keyup', function(e) {
    if (Password.value.length < 6) {
      e.preventDefault();
      err_Msg_password.innerHTML = "Password is too short";
      Password.classList.add('InValid');
    } else {
      Password.classList.remove('InValid');
      err_Msg_password.innerHTML = '';

    }
  });

  username_val = username.value;
  email_val = Email.value;
  password_val = Password.value;

  createUserWithEmailAndPassword(auth, email_val, password_val).then((userCredential) => {
    const user = userCredential.user;

    set(ref(database, 'users/' + user.uid), {
      username: username_val,
      email: email_val
    });

    alert("user created");

  }).catch((error) => {
    alert(error.message);
  })


});

//validating login form 
const logInForm = document.getElementById('logInForm');

const logInEmail = document.getElementById('logInEmail');

const logInPassword = document.getElementById('logInPassword');

const logInBtn = document.getElementById('logInBtn');

let logIn_err_Msg_email = document.getElementById('logIn_err_msg_email');

let logIn_err_Msg_password = document.getElementById('logIn_err_msg_password');

goToLogInPage.addEventListener('click', function removeSignUpForm(e) {
  myForm.style.display = "none";
  logInForm.style.display = "flex";
});

logInBtn.addEventListener('click', function(e) {
  var logIn_email_val;
  if (logInEmail.value == '') {
    e.preventDefault();
    logIn_err_Msg_email.innerHTML = "please enter your email address";
    logInEmail.classList.toggle('InValid');

  } else {
    logInEmail.classList.remove('InValid');
    logIn_err_Msg_email.innerHTML = '';
  }

  logInEmail.addEventListener('keyup', function(e) {
    if (logInEmail.value.length < 13) {
      e.preventDefault();
      logIn_err_Msg_email.innerHTML = "Enter atleast 3 characters before \'@\'";
      logInEmail.classList.add('InValid');
    } else {
      logInEmail.classList.remove('InValid');
      logIn_err_Msg_email.innerHTML = '';
    }
  });

  var logIn_password_val;
  if (logInPassword.value == '') {
    e.preventDefault();
    logIn_err_Msg_password.innerHTML = "please enter password";
    logInPassword.classList.add('InValid');
    Password.focus();
  } else {
    logInPassword.classList.remove('InValid');
    logIn_err_Msg_password.innerHTML = '';
  }

  logInPassword.addEventListener('keyup', function(e) {
    if (logInPassword.value.length < 6) {
      e.preventDefault();
      logIn_err_Msg_password.innerHTML = "Password is too short";
      logInPassword.classList.add('InValid');
    } else {
      logInPassword.classList.remove('InValid');
      logIn_err_Msg_password.innerHTML = '';
    }
  });

  logIn_email_val = logInEmail.value;

  logIn_password_val = logInPassword.value;

  //signed in the user with their registered email and password 

  signInWithEmailAndPassword(auth, logIn_email_val, logIn_password_val).then((success) => {

    location.href = 'joke.html';
  }).catch((Error) => {
    alert(errorMessage);
  });

});
/* starting a new phase after successful login or signup */

const user_icon = document.getElementById('user_icon');

const logOutBtn = document.getElementById('logOut');

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    myForm.style.display = "none";
    logInForm.style.display = "none";
    logOutBtn.classList.replace('hide', 'showLogOut');
    getUserInfo();
    // ...
  } else {
    // User is signed out
    // ...
    myForm.style.display = "flex";
    logInForm.style.display = "none";
  }
});


signUpLink.addEventListener('click', function(e) {
  myForm.style.display = "flex";
  logInForm.style.display = "none";
});

function getUserInfo() {

  const user = auth.currrentUser;
  if (user) {
    console(user.displayName);
  } else {
    console.log("user not found");
  }
}
logOutBtn.addEventListener('click', function logOutUser() {
  signOut(auth).then(() => {
    logOutBtn.classList.replace('showLogOut', 'hide');
    myForm.style.display = "flex";
    logInForm.style.display = "none";
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    alert("There is an error" + errorMessage);
  });
})
/* features

1. If the user clicks on the save, share, saved content, shared content, account info tab or theme changing button then without signing in or signing up to the website then redirect them to the login or signup page. Again if the user clicks on crack a joke more than 5 times then redirect them to login or signup page.

2. User can take picture of themselves to set it as a profile picture

3. make separate folders for html, css and js files

4. make functionality for saving theme preferences selected by the user to the localStorage 

5. save all the saved and shared contents on the firebase's database
6. add animation in signup / login form
*/

/* dynamic import module */

/* if the user successfully logged in or signed up then in the onAuthStateChanged method use dynamic import to update the account ui in the home page */