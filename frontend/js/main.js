const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const togglePassword = document.getElementById("togglePassword");

// Toggle show/hide password
togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "Show";
  }
});

// Temporary strength placeholder logic
passwordInput.addEventListener("input", () => {
  const length = passwordInput.value.length;

  let strength = 0;

  if (length > 0) strength = 20;
  if (length >= 8) strength = 40;
  if (length >= 12) strength = 60;
  if (length >= 16) strength = 80;
  if (length >= 20) strength = 100;

  strengthBar.style.width = strength + "%";

  if (strength <= 40) {
    strengthBar.style.backgroundColor = "red";
    strengthText.textContent = "Strength: Weak";
  } else if (strength <= 70) {
    strengthBar.style.backgroundColor = "orange";
    strengthText.textContent = "Strength: Medium";
  } else {
    strengthBar.style.backgroundColor = "green";
    strengthText.textContent = "Strength: Strong";
  }
});
