const body = document.body;
const btn = document.getElementById('toggleTheme');
const icon = document.getElementById('iconTheme');


btn.onclick = () => {
  body.classList.toggle('dark')
  if(icon.classList.contains('bi-sun')){
    icon.className = 'bi bi-moon-stars'
  } else {
    icon.className = 'bi bi-sun' 
  }

  if(btn.classList.contains('btn-light')) {
    btn.className = 'btn btn-dark'
  } else {
    btn.className = 'btn btn-light'
  }
};
