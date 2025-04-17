//Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");

    mobileMenu.classList.toggle("hidden");

    if (mobileMenu.classList.contains("hidden")) {
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    } else {
      mobileMenu.classList.add("animate__animated", "animate__fadeIn"); // Add animation when opening
      hamburgerIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    }
  });

// Animate on scroll
const animateOnScrollElements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes
        entry.target.classList.add("animate__animated", "animate__fadeIn");
        entry.target.style.opacity = 1;

        // Optionally reset the animation after it has played
        entry.target.addEventListener("animationend", () => {
          entry.target.classList.remove("animate__animated", "animate__fadeIn");
        });
      } else {
        // Optionally reset opacity if the element is out of view
        entry.target.style.opacity = 0;
      }
    });
  },
  {
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  }
);

animateOnScrollElements.forEach((element) => {
  observer.observe(element);
});
