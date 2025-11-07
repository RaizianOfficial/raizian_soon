document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("earlyForm");
  const email = document.getElementById("email");
  const success = document.getElementById("success");
  const btn = document.getElementById("submitBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent redirect

    const data = new FormData(form);

    btn.disabled = true;
    btn.textContent = "Submitting…";

    try {
      const response = await fetch("https://formspree.io/f/xldoqlgg", {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" },
      });

      if (response.ok) {
        // hide form and show success message
        form.style.display = "none";
        success.classList.add("show");
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      btn.disabled = false;
      btn.textContent = "Request access";
    }
  });
});


const navOpen = document.querySelector("#navOpen");
const hddNav = document.querySelector(".hdd-nav");

let isNavOpen = false;

navOpen.addEventListener("click", () => {
    if (isNavOpen) {
        // Add hide animation
        hddNav.classList.remove("animate-fade-in");
        hddNav.classList.add("animate-fade-out");

        // Wait for animation to complete then hide
        setTimeout(() => {
            hddNav.style.display = "none";
        }, 300); // Match with your animation duration
    } else {
        // Show and add show animation
        hddNav.style.display = "block";
        hddNav.classList.remove("animate-fade-out");
        hddNav.classList.add("animate-fade-in");
    }

    isNavOpen = !isNavOpen;
});


document.getElementById("raizianBtn").addEventListener("click", function() {
    window.location.href = "/comingsoon.html";
  });

  document.getElementById("learnBtn").addEventListener("click", function() {
    window.location.href = "/about.html";
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

