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

  // Use your actual .ico paths (✅ confirmed to work)
  const icons = [
    "assets/icons/favicon/favicon.ico",      // Default
    "assets/icons/favicon-alt/favicon.ico"   // Alternate
  ];

  let current = 0;
  let interval;

  function switchFavicon() {
    iconEl.setAttribute('href', icons[current]);
    current = (current + 1) % icons.length;
  }


  function startAnimation() {
    if (!interval) interval = setInterval(switchFavicon, 2000);
  }

  function stopAnimation() {
    clearInterval(interval);
    interval = null;
    iconEl.href = icons[0]; // reset to default
  }

  // Pause animation when tab is hidden to save CPU
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAnimation();
    else startAnimation();
  });

  startAnimation();
});
