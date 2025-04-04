export function createEl(tag, className = "", textContent, parent) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (textContent) el.textContent = textContent;
  if (parent) parent.appendChild(el);
  return el;
}
