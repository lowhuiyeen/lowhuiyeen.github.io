// Simple HTML include loader
document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("/partials/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-header").innerHTML = html;
      // after header is loaded, run main.js to activate nav features
      const script = document.createElement("script");
      script.src = "assets/js/main.js";
      document.body.appendChild(script);
    });
   

  // Load footer
  fetch("/partials/footer.html")
    .then(res => res.text())
    .then(html => (document.getElementById("site-footer").innerHTML = html));
});

document.addEventListener("DOMContentLoaded", () => {
  const iconEl = document.getElementById("dynamic-favicon");
  if (!iconEl) return;

  // ✅ Use relative paths for GitHub Pages
  const icons = [
    "assets/icons/favicon/favicon.ico",      // Default
    "assets/icons/favicon-alt/favicon.ico"   // Alternate
  ];

  let current = 0;
  let interval;

  function switchFavicon() {
    current = (current + 1) % icons.length;
    iconEl.href = icons[current];
  }

  function startAnimation() {
    if (!interval) interval = setInterval(switchFavicon, 2000);
  }

  function stopAnimation() {
    clearInterval(interval);
    interval = null;
    iconEl.href = icons[0]; // reset to default
  }

  // Only animate when tab is visible
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAnimation();
    else startAnimation();
  });

  // Start animation initially
  startAnimation();
});
