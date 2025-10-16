// Reusable partial loader
async function includeHTML(selector, file) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(res.status);
    el.innerHTML = await res.text();
  } catch (e) {
    el.innerHTML = `<div class="small" style="color:#c0392b">Failed to load: ${file}</div>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  includeHTML('#site-header', 'partials/header.html');
  includeHTML('#site-footer', 'partials/footer.html');
  includeHTML('#contact-info', 'partials/contact-info.html');
});
