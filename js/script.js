// Initialize AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});

// Role typing animation
document.addEventListener("DOMContentLoaded", () => {
  const roles = ["Full-Stack Developer", "Web Developer", "Software Engineer"];
  const roleElement = document.getElementById("role");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      roleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      roleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  typeEffect();
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navMenu = document.querySelector(".nav-menu");

mobileMenuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileMenuToggle.classList.toggle("active");
});

// Theme toggle
const themeToggle = document.querySelector(".theme-toggle");
const htmlElement = document.documentElement;

// Check for saved theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  htmlElement.classList.add("light-theme");
  themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {
  htmlElement.classList.toggle("light-theme");
  const isLight = htmlElement.classList.contains("light-theme");

  themeToggle.innerHTML = isLight
    ? '<i class="fa-regular fa-sun"></i>'
    : '<i class="fa-regular fa-moon"></i>';

  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active navigation highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
