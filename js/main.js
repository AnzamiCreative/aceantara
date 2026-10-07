const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const yearEl = document.getElementById("year");
const backToTop = document.querySelector(".back-to-top");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const handleScroll = () => {
  if (window.scrollY > 8) {
    navbar?.classList.add("scrolled");
  } else {
    navbar?.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

navToggle?.addEventListener("click", () => {
  const isActive = navMenu?.classList.toggle("active");
  navToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
  navToggle.innerHTML = isActive
    ? '<i class="bi bi-x"></i>'
    : '<i class="bi bi-list"></i>';
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("active");
    navToggle?.setAttribute("aria-expanded", "false");
    if (navToggle) navToggle.innerHTML = '<i class="bi bi-list"></i>';
  });
});

document.addEventListener("click", (e) => {
  if (
    !navMenu?.contains(e.target) &&
    !navToggle?.contains(e.target) &&
    navMenu?.classList.contains("active")
  ) {
    navMenu.classList.remove("active");
    navToggle?.setAttribute("aria-expanded", "false");
    if (navToggle) navToggle.innerHTML = '<i class="bi bi-list"></i>';
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu?.classList.contains("active")) {
    navMenu.classList.remove("active");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.focus();
    if (navToggle) navToggle.innerHTML = '<i class="bi bi-list"></i>';
  }
});

backToTop?.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
