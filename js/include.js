async function includeHTML(selector, file) {
  const element = document.querySelector(selector);
  if (element) {
    const response = await fetch(file);
    if (response.ok) {
      element.innerHTML = await response.text();
    } else {
      element.innerHTML = "Content not found.";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("#header", "assets/partials/header.html");
  includeHTML("#footer", "assets/partials/footer.html");
});


async function includeHTML(selector, file) {
  const element = document.querySelector(selector);
  if (element) {
    const response = await fetch(file);
    if (response.ok) {
      element.innerHTML = await response.text();
    } else {
      element.innerHTML = "Content not found.";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("#header", "assets/partials/header.html");
  includeHTML("#footer", "assets/partials/footer.html");
  includeHTML("#contact", "assets/partials/contact-info.html");
});
