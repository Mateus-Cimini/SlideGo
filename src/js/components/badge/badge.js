let badgeEl = null;
let hideTimeout = null;

export function showBadge(
  text,
  {
    iconClass = "bi bi-stars",
    target = "body",
    duration = 8000,
    random = true,
  } = {}
) {
  const phrases = Array.isArray(text)
    ? text[random ? Math.floor(Math.random() * text.length) : 0]
    : text;

  if (!badgeEl) {
    badgeEl = document.createElement("div");
    badgeEl.className = "custom-badge fade-badge";

    const icon = document.createElement("i");
    icon.className = iconClass;

    const span = document.createElement("span");

    badgeEl.append(icon, span);

    const container =
      typeof target === "string" ? document.querySelector(target) : target;

    if (!container) return;
    container.appendChild(badgeEl);
  }

  badgeEl.querySelector("span").textContent = phrases;
  badgeEl.querySelector('i').className = iconClass;


  badgeEl.classList.remove("show");
  void badgeEl.offsetWidth; // Trigger reflow
  badgeEl.classList.add("show");

  if (hideTimeout) clearTimeout(hideTimeout);

  hideTimeout = setTimeout(() => {
    badgeEl.classList.remove("show");
  }, duration);
}
