//import firebase modules here in this file 

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";


const joke = document.getElementById('joke');

const btn = document.getElementById('joke_btn');

const api_url = `https://icanhazdadjoke.com/`;

const theme_btn = document.getElementById('theme_btn');

const share_btn = document.getElementById('share_btn');

generateJoke();

btn.addEventListener('click', generateJoke);

let new_joke = [];

function generateJoke(e) {

  fetch(api_url, {
    headers: {
      'Accept': 'application/json',
    },
  }).then(res => res.json()).then(data => {
    joke.innerHTML = data.joke;
    new_joke.push(data.joke);
  }).catch((Error) => {
    console.log(Error);
  })
}

// logged in or not module importing at page loads 

firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
    console.log(user);
  }
  else{
    console.log("not found");
  }
})

// Implementing sidebar opening and closing functionality 

var save_btn = document.getElementById('save_btn');

save_btn.addEventListener('click', function() {
  save_btn.classList.replace('far', 'fas');
  localStorage.setItem('Joke', JSON.stringify(new_joke));
})

