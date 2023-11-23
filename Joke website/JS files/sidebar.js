const sidebar_icon = document.querySelector('.sb_icon');
const sbi_box = document.querySelector('.sidebar_icon');
const sidebar = document.querySelector('aside');

sidebar_icon.addEventListener('click', function() {
  sidebar.classList.toggle('active');
  sbi_box.classList.toggle('active');
  if (sidebar_icon.classList.contains('fa-bars')) {
    sidebar_icon.classList.replace('fa-bars', 'fa-times');
  } else {
    sidebar_icon.classList.replace('fa-times', 'fa-bars');
  }
})
