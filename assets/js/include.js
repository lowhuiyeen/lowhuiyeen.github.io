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

  // Validate element
  if (!iconEl) return;

  // Define icon sets (relative paths)
  const iconSets = [
    "assets/icons/favicon/favicon-96x96.png",
    "assets/icons/favicon-alt/favicon-96x96.png"
  ];

  let current = 0;
  let interval = null;

  // Switch favicon
  function switchFavicon() {
    current = (current + 1) % iconSets.length;
    iconEl.href = iconSets[current];
  }

  // Start animation
  function startFaviconAnimation() {
    if (!interval) interval = setInterval(switchFavicon, 2000);
  }

  // Stop animation and reset
  function stopFaviconAnimation() {
    clearInterval(interval);
    interval = null;
    iconEl.href = iconSets[0];
  }

  // Visibility handler (pause when tab hidden)
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopFaviconAnimation();
    else startFaviconAnimation();
  });

  // Start on load
  startFaviconAnimation();
});


