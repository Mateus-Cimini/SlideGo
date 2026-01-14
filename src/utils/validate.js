export function validateImageForm(title, url) {
  if (!title.trim()) {
    return { valid: false, message: `Titulo obrigatorio!` };
  }

  const urlPattern = /^(https?:\/\/[^\s]+)$/;
  if (!urlPattern.test(url)) {
    return { valid: false, message: `URL invalida` };
  }

  return {valid: true}
}
