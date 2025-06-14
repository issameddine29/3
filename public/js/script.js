
const toggleBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");

dropdownToggle.addEventListener("click", function (e) {
  if (window.innerWidth <= 991) {
    e.preventDefault();
    dropdown.classList.toggle("open");
  }
});
   window.addEventListener('load', () => {
      const title = document.getElementById('hero-title');
      const subtitle = document.getElementById('hero-subtitle');
      const buttons = document.getElementById('hero-buttons');

      setTimeout(() => title.classList.add('show'), 300);
      setTimeout(() => subtitle.classList.add('show'), 1000);
      setTimeout(() => buttons.classList.add('show'), 1700);
    });