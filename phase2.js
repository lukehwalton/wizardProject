function goBack(){
  window.location.href = "phase1.html";
}

function submitPhase2(){
  const cityInput = document.getElementById("city-box");
  const streetInput = document.getElementById("street-box");
  const numberInput = document.getElementById("number-box");

  const city = cityInput.value.trim();
  const street = streetInput.value.trim();
  const houseNumber = numberInput.value.trim();

  let isValid = true;

  //validate city
  if (!city) {
    isValid = false;
    cityInput.classList.add("invalid");
  } else {
    cityInput.classList.remove("invalid");
  }

  //validate street
  if (!street) {
    isValid = false;
    streetInput.classList.add("invalid");
  } else {
    streetInput.classList.remove("invalid");
  }

  //if a house number is present, check it; otherwise, set number to valid
  if(houseNumber) {
    if (!validateNumber(houseNumber)){
      isValid = false;
      numberInput.classList.add("invalid");
    } else {
      numberInput.classList.remove("invalid");
    }
  } else {
    numberInput.classList.remove("invalid");
  }

  if (isValid) {
    const user = new User(storedUser.name, storedUser.email, storedUser.birthDate);
    user.updatePhase2(city, street, houseNumber);

    localStorage.setItem("user", JSON.stringify(user));
    
    //go to next page
    window.location.href = "phase3.html";
  }
};

const storedUser = onLoad(2);
console.log(storedUser);