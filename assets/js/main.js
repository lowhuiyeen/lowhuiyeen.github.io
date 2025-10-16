// ===== NAVBAR ACTIVE LINK =====
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

// ===== PHOTO TOGGLE =====
const btn = document.getElementById('toggle-pic');
const pic = document.getElementById('profile-pic');
if (btn && pic) {
  const original = pic.src;
  const alt = 'assets/images/LowHuiYeenAlt.jpg';
  let altShown = false;

  btn.addEventListener('click', () => {
    pic.classList.add('fade-out');
    setTimeout(() => {
      pic.src = altShown ? original : alt;
      altShown = !altShown;
    }, 200);
    pic.onload = () => pic.classList.remove('fade-out');
  });
}

// ===== HAMBURGER MENU =====
document.addEventListener('click', e => {
  if (e.target.id === 'menu-toggle') {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('open');
    e.target.textContent = nav.classList.contains('open') ? '✖' : '☰';
  }
});
