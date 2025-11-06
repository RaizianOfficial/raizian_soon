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
