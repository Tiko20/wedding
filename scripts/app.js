const countdownDate = new Date("July 15, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  const header = document.querySelector(".header-wedding-timer");

  if (!header) return;

  if (distance <= 0) {
    clearInterval(countdown);
    document.querySelector(".countdown-timer").innerHTML = "💍 Today is the wedding!";
    header.classList.add("visible");
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

  if (!header.classList.contains("visible")) {
    header.classList.add("visible");
  }
}

// Start countdown
updateCountdown();
const countdown = setInterval(updateCountdown, 1000);

// Scroll animation
const elements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

elements.forEach(el => observer.observe(el));