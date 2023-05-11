function submitPhase1() {
  const firstInput = document.getElementById("first");
  const lastInput = document.getElementById("last")
  const emailInput = document.getElementById("email");
  const birthDateInput = document.getElementById("birth-date");

  const first = firstInput.value.trim();
  const last = lastInput.value.trim();
  const email = emailInput.value.trim();
  const birthDate = birthDateInput.value.trim();
  let isValid = true;

  // Validate name
  if (!validateName(first)) {
    isValid = false;
    firstInput.classList.add("invalid");
  } else {
    firstInput.classList.remove("invalid");
  }

  if (!validateName(last)) {
    isValid = false;
    lastInput.classList.add("invalid");
  } else {
    lastInput.classList.remove("invalid");
  }

  // Validate email
  if (!validateEmail(email)) {
    isValid = false;
    emailInput.classList.add("invalid");
  } else {
    emailInput.classList.remove("invalid");
  }

  // Validate birth date
  if (!validateBirthDate(birthDate)) {
    isValid = false;
    birthDateInput.classList.add("invalid");
  } else {
    birthDateInput.classList.remove("invalid");
  }

  if (isValid) {
    const user = new User();
    user.updatePhase1(`${first} ${last}`, email, birthDate);
    
    localStorage.setItem("user", JSON.stringify(user));

    //Redirect to phase 2 page
    window.location.href = "phase2.html";
  }
}

onLoad(1);