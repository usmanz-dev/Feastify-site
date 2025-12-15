// Navigation
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navigation-wrap");
  if (window.scrollY > 50) {
    navbar.classList.add("scroll-on");
  } else {
    navbar.classList.remove("scroll-on");
  }
});

// Nav Hide
let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function (a) {
  a.addEventListener("click", function () {
    navcollapse.classList.remove("show");
  });
});

// Counter Design

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    if (!obj) return; // Ensure element exists

    let current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = range !== 0 ? Math.abs(Math.floor(duration / range)) : duration,
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }

  counter("count1", 0, 2287, 3000);
  counter("count2", 100, 3736, 3000);
  counter("count3", 0, 2440, 3000);
  counter("count4", 0, 3610, 3000);
});
