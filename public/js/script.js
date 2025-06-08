document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // === MENU BURGER ===
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // === DROPDOWN EN MOBILE ===
  const dropdown = document.querySelector(".dropdown");
  const dropdownToggle = dropdown?.querySelector(".dropdown-toggle");

  if (dropdownToggle) {
    dropdownToggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  }

  // === NAVBAR ANIMATION ===
  gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  gsap.from(".nav-links li", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.3,
  });

  // === BANNIÈRE ANIMATIONS ===
  gsap.to(".line", {
    scaleX: 1,
    duration: 1,
    ease: "power2.out",
    delay: 0.5,
  });

  gsap.to(".reveal-text", {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 1,
    ease: "power2.out",
  });

  // === BANNIÈRE CONTENU (si présent) ===
  gsap.from(".banner-content", {
    opacity: 0,
    y: -50,
    scale: 0.95,
    duration: 1.5,
    ease: "power3.out",
  });

  gsap.from(".banner-content h1", {
    opacity: 0,
    y: -30,
    duration: 1,
    delay: 0.5,
  });

  gsap.from(".banner-content p", {
    opacity: 0,
    y: -20,
    duration: 1,
    delay: 1,
  });

  gsap.from(".banner-buttons .btn", {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    delay: 1.5,
    stagger: 0.2,
  });

  // === ANIMATION DES CARTES (.card) ===
  gsap.utils.toArray(".card").forEach((card, i) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      scale: 1,
      opacity: 1,
      duration: 0.8,
      delay: i * 0.2,
      ease: "back.out(1.7)",
    });
  });

  // === EFFET COLLISION pour .service-card ===
  gsap.utils.toArray(".service-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 60, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // REVIENT en arrière
        },
      }
    );
  });

  // === SECTION À PROPOS : BULLE + APPARITION TEXTE ===
  gsap.from(".text-zone", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "back.out(1.7)",
  });
});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".contact-info", {
  scrollTrigger: {
    trigger: ".contact-info",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power2.out",
});
