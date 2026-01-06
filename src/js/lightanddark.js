export function initThemeToggle(btn, body, icon) {
  btn.onclick = () => {
    body.classList.toggle("dark");

    icon.classList.toggle("bi-sun");
    icon.classList.toggle("bi-moon-stars");

    btn.classList.toggle("btn-dark");
    btn.classList.toggle("btn-light");
  };
}
