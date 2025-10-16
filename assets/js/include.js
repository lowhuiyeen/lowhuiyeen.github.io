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
    // Load contact
  fetch("/partials/contact-info.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-contact").innerHTML = html;

    });

  // Load footer
  fetch("/partials/footer.html")
    .then(res => res.text())
    .then(html => (document.getElementById("site-footer").innerHTML = html));
});

