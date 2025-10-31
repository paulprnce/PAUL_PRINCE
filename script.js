// Reveal on scroll
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
});
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) this.size -= 0.01;
    if (this.size < 0.2) this.size = Math.random() * 2;
  }
  draw() {
    ctx.fillStyle = "rgba(200, 200, 200, 0.7)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});


// script.js
(function () {
  // spotlight mouse-follow
  function onMove(e) {
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
  }
  window.addEventListener('mousemove', onMove, { passive: true });

  // example: populate year (you already have this in the page)
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();



/*skills*/
// script.js
const marqueeTrack = document.getElementById("marqueeTrack");

// duplicate content so it looks endless
marqueeTrack.innerHTML += marqueeTrack.innerHTML;

let offset = 0;
function animateMarquee() {
  offset -= 1; // speed (px per frame)
  marqueeTrack.style.transform = `translateX(${offset}px)`;

  // reset when half track has passed
  if (Math.abs(offset) >= marqueeTrack.scrollWidth / 2) {
    offset = 0;
  }

  requestAnimationFrame(animateMarquee);
}

animateMarquee();


/*button*/


