document.addEventListener("DOMContentLoaded", () => {
  // ===== Menu Burger =====
  const toggleBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // ===== Dropdown Responsive =====
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener("click", (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  }

  // ===== Animation Héros Section =====
  const title = document.getElementById("hero-title");
  const subtitle = document.getElementById("hero-subtitle");
  const buttons = document.getElementById("hero-buttons");

  if (title) setTimeout(() => title.classList.add("show"), 300);
  if (subtitle) setTimeout(() => subtitle.classList.add("show"), 1000);
  if (buttons) setTimeout(() => buttons.classList.add("show"), 1700);

  // ===== Apparition Contenu Héros =====
  const heroContent = document.getElementById("hero-content");
  const heroStats = document.getElementById("hero-stats");

  if (heroContent) {
    heroContent.style.opacity = "1";
    heroContent.style.transform = "translateY(0)";
  }
  if (heroStats) {
    heroStats.style.opacity = "1";
    heroStats.style.transform = "translateY(0)";
  }

  // ===== GSAP Animation pour Section À Propos (icônes) =====
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-icons-section .section-title", {
      scrollTrigger: ".about-icons-section",
      y: 50,
      opacity: 0,
      duration: 1
    });

    gsap.from(".about-icons-section .section-subtitle", {
      scrollTrigger: ".about-icons-section",
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.2
    });
  }

  // ===== Swiper Carousel =====
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      autoHeight: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }
});

// ===== Animation cartes au scroll (hors DOMContentLoaded car scroll direct) =====
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".icon-card");
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add("visible");
    }
  });
});

// ===== Animation "about" au chargement complet =====
window.addEventListener("load", () => {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    setTimeout(() => {
      aboutSection.classList.add("show-animation");
    }, 1000);
  }
});
