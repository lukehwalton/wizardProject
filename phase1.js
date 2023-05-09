const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const birthDateInput = document.getElementById("birth-date");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const birthDate = birthDateInput.value.trim();

  let isValid = true;

  // Validate name
  const nameRegex = /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/;
  if (!nameRegex.test(name)) {
    isValid = false;
    nameInput.classList.add("invalid");
  } else {
    nameInput.classList.remove("invalid");
  }

  // Validate email
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    isValid = false;
    emailInput.classList.add("invalid");
  } else {
    emailInput.classList.remove("invalid");
  }

  // Validate birth date
  const birthDateRegex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{2}$/;
  if (!birthDateRegex.test(birthDate)) {
    isValid = false;
    birthDateInput.classList.add("invalid");
  } else {
    birthDateInput.classList.remove("invalid");
  }

  if (isValid) {
    const user = new User();
    user.updatePhase1(name, email, birthDate);


    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to phase 2 page
    window.location.href = "phase2.html";
  }
});
