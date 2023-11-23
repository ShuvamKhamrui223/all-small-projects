const image_joke_url = `https://v2.jokeapi.dev/joke`;
const img = document.querySelector('#img_joke');
function generateJoke(e) {

  fetch(image_joke_url+`?format=json`, {
    headers: {
      'Accept': 'application/json',
    },
  }).then(res => res.json()).then(data => {
   // img.src = data.joke;
   // getJoke(data.joke);
   console.log(data);
  }).catch((Error) => {
    console.log(Error);
  })
}
generateJoke();
