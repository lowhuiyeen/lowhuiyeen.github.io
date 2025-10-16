// Dynamic helpers: hide empty sections & add fade-in
document.addEventListener('DOMContentLoaded', () => {
  const secs = document.querySelectorAll('section');
  let hidden = 0;
  secs.forEach(s => {
    const hasCards = s.querySelector('.card');
    const text = s.textContent.trim();
    const comingSoon = /coming soon/i.test(text);
    const shouldHide = (!hasCards && text.replace(/\s+/g,'').length < 30) || comingSoon;
    if (shouldHide) { s.classList.add('hidden'); hidden++; }
    else { s.classList.add('fade-in'); }
  });

  if (hidden && document.querySelector('.container')) {
    const note = document.createElement('div');
    note.className = 'card small';
    note.innerHTML = '🚧 More sections are being prepared. Check back soon for updates.';
    document.querySelector('.container').appendChild(note);
  }
});

// --- Profile Picture Toggle Feature ---
document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("profile-pic");
  const btn = document.getElementById("toggle-pic");
  if (!img || !btn) return;

  const original = "assets/images/LowHuiYeenProfile.jpg";
  const alternate = "assets/images/LowHuiYeenAlt.jpg";
  let showingOriginal = true;

  btn.addEventListener("click", () => {
    showingOriginal = !showingOriginal;
    img.src = showingOriginal ? original : alternate;
    btn.textContent = showingOriginal ? "🔄 Show Alternate Image" : "🔙 Back to Original";
  });
});
