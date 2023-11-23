// code for implementing theme and changing the icon from day to night and vice versa 
const check_btn = document.getElementById('check_btn');
const section = document.querySelector('section');
const icon = document.querySelector('#theme_btn');

check_btn.addEventListener('click', function() {
  section.classList.toggle('active');
  if (icon.classList.contains('fa-sun')) {
    icon.classList.replace('fa-sun', 'fa-moon');
    icon.style.color = "cyan";
  } else {
    icon.classList.replace('fa-moon', 'fa-sun');
    icon.style.color = "yellow";
  }
})