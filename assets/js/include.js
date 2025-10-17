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

  // Paths are relative to index.html
  const icons = ["favicon.ico", "favicon-alt.ico"];

  let current = 0;
  let interval;

  function switchFavicon() {
    current = (current + 1) % icons.length;
    iconEl.href = icons[current] + "?v=" + Date.now(); // force reload
  }

  function startAnimation() {
    if (!interval) interval = setInterval(switchFavicon, 2000);
  }

  function stopAnimation() {
    clearInterval(interval);
    interval = null;
    iconEl.href = icons[0];
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAnimation();
    else startAnimation();
  });

  startAnimation();
});

