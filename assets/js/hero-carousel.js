const slides = document.querySelectorAll('.hero-slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 7000); // 7 seconds per image (calm)
