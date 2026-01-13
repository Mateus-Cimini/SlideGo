const THEME_KEY = "theme";

export function initThemeToggle(btn, body, icon) {
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";

  if (savedTheme === "dark") {
    body.classList.add("dark");
    icon.className = "bi bi-moon-stars";
    btn.classList.remove("btn-dark");
    btn.classList.add("btn-light");
  }

  btn.onclick = () => {
    const isDark = body.classList.toggle("dark");

    if (isDark) {
      icon.className = "bi bi-moon-stars";
      btn.className = "btn btn-light";
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      icon.className = "bi bi-sun";
      btn.className = "btn btn-dark";
      localStorage.setItem(THEME_KEY, "light");
    }
  };
}
