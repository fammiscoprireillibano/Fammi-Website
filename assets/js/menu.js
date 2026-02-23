document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");

  if (!burger || !nav) return;

  // Toggle menu
  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
    burger.classList.toggle("open");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      burger.classList.remove("open");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      nav.classList.remove("active");
      burger.classList.remove("open");
    }
  });
});

