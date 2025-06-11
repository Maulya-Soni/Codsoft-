document.addEventListener("DOMContentLoaded", () => {
  // Simulate a loading screen
  setTimeout(() => {
    const loader = document.getElementById("preloader");
    const mainContent = document.getElementById("content");

    if (loader && mainContent) {
      loader.style.opacity = 0;
      loader.style.transition = "opacity 0.5s ease-out";
      setTimeout(() => {
        loader.style.display = "none";
        mainContent.style.display = "block";
        AOS.init({ duration: 800, once: true });
      }, 100);
    }
  }, 100);
});

// Validate form before submission
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    alert("All fields are required. Please complete the form.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Message submitted successfully!");
  return true;
}
