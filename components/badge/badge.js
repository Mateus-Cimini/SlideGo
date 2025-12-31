export function createBadge({
  phrases = [],
  iconClass = 'bi bi-stars',
  target = 'body',
  random = true
}) {
  if (!phrases.length) return;

  const badge = document.createElement('div');
  badge.className = 'custom-badge';

  const icon = document.createElement('i');
  icon.className = iconClass;

  const text = document.createElement('span');

  const index = random
    ? Math.floor(Math.random() * phrases.length)
    : 0;

  text.textContent = phrases[index];

  badge.append(icon, text);

  const container =
    typeof target === 'string'
      ? document.querySelector(target)
      : target;

  if (container) {
    container.appendChild(badge);
  }
}
