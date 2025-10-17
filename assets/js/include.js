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

  // ✅ Direct root paths
  const icons = [
    "favicon.ico",       // Default
    "favicon-alt.ico"    // Alternate
  ];

  let current = 0;
  let interval;

  function switchFavicon() {
    current = (current + 1) % icons.length;
    iconEl.href = icons[current] + "?v=" + Date.now(); 
    // 👆 forces browser to bypass cache
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

// Highlight active nav link based on current page
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});
