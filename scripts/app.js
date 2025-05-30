// Select all elements that should animate on scroll
const elements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes
        entry.target.classList.add(
          "tracking-in-contract-bck-bottom",
          "visible"
        );
        // Stop observing once animation is triggered
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 30% of element is visible
  }
);

// Start observing each target element
elements.forEach((el) => observer.observe(el));

const countdownDate = new Date("Sep 05, 2025 00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance <= 0) {
    clearInterval(countdown);
    document.querySelector(".countdown-timer").innerHTML =
      "💍 Today is the wedding!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}, 1000);
