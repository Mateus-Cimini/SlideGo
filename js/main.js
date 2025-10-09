const body = document.body;
const btn = document.getElementById('toggleTheme');

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) body.classList.add('dark')

btn.onclick = () => {
  body.classList.toggle('dark')
};
