
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
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });